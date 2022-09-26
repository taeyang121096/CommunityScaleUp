package com.scaleup.authentication.service;

import com.scaleup.authentication.dto.ItemRequest;
import com.scaleup.authentication.dto.ItemResponse;
import com.scaleup.authentication.entity.Files;
import com.scaleup.authentication.entity.Item;
import com.scaleup.authentication.entity.ItemDetail;
import com.scaleup.authentication.repository.FileRepository;
import com.scaleup.authentication.repository.ItemDetailRepository;
import com.scaleup.authentication.repository.ItemRepository;
import com.scaleup.core.authorize.FileType;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.*;
import java.time.LocalDateTime;
import java.util.*;

@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;
    private final FileRepository fileRepository;
    private final ItemDetailRepository itemDetailRepository;

    @Value("${custom.path.resource-path}")
    private String path;

    // 리액트 iframe 여러 파일을 다운로드 받을 수 있다고함, 반복문으로 한번에 여러개 하면 될줄 알았건만 http는 한번만 보낼수 있다고 함
    // 안보이는 iframe 을 생성해서 파일 수 만큼 호출하는 것

    @Override
    public void downloadFile(Map<String, Object> param, Long itemId, HttpServletResponse response) throws Exception {
        String urlPath = (String) param.get("urlPath");
        try {
            List<Files> findItemFiles = fileRepository.findByItemNo(itemId);
            for (Files f : findItemFiles) {
                String filePath = path + f.getFileName();
                File file = new File(filePath);

                // 다운로드 되거나 로컬에 저장되는 용도로 쓰이는지를 알려주는 헤더
                response.setContentLength((int) file.length());
                response.setContentType("application/x-msdownload;charset=utf-8");
                response.setHeader("Content-Disposition", "attachment;filename=" + f.getFileName() + ";");
                response.setHeader("Content-Transfer-Encoding", "binary");
                response.setHeader("Pragma", "no-cache");
                response.setHeader("Expires", "0");
                System.out.println(f.getFileName());
                // 	실제 다운로드를 하는 부분
                OutputStream os = response.getOutputStream();
                FileInputStream fis = new FileInputStream(filePath);
                int readCount = 0;
                byte[] buffer = new byte[1024];
                while ((readCount = fis.read(buffer)) != -1) {
                    os.write(buffer, 0, readCount);
                }
                fis.close();
                os.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception("download error");
        }
    }

    /**
     * @RequestPart = image 라는 이름으로 파일을 받는다.
     * 여기서 이렇게 바로 item에 담아서 리턴해주는 방법이 있고, getMapping 으로 하는것도 구현하겠다.
     */
    @Override
    public ItemResponse uploadItem(ItemRequest itemRequest, List<MultipartFile> files) {
        List<Files> itemFiles = uploadFiles(files);
        List<Files> list = new ArrayList<>();
        Item byName = itemRepository.findByItemName(itemRequest.getItemName());
        if (byName != null) {
            throw new DuplicateKeyException(String.format(
                    "이미 존재하는 아이템입니다"
            ));
        } else {
            Item item = itemRepository.save(Item.builder()
                    .itemName(itemRequest.getItemName())
                    .itemCategory(itemRequest.getItemCategory())
                    .itemRegistDate(LocalDateTime.now())
                    .build());

            Item saveItem = itemRepository.save(item);

            ItemDetail saveItemDetail = itemDetailRepository.save(ItemDetail.builder()
                    .itemNo(saveItem.getNo())
                    .itemPrice(itemRequest.getItemPrice())
                    .quantity(itemRequest.getQuantity())
                    .itemInfo(itemRequest.getItemInfo())
                    .itemProduceInfo(itemRequest.getItemProduceInfo())
                    .itemRegisteDate(LocalDateTime.now())
                    .itemSize(itemRequest.getItemSize())
                    .build());

            for (Files f : itemFiles) {
                f.setItemNo(saveItem.getNo());
                f.setUseYn("Y");
                list.add(fileRepository.save(f));
            }

            return ItemResponse.builder()
                    .itemName(saveItem.getItemName())
                    .itemCategory(saveItem.getItemCategory())
                    .itemPrice(saveItemDetail.getItemPrice())
                    .quantity(saveItemDetail.getQuantity())
                    .filesList(list)
                    .build();
        }
    }

    @Override
    public ItemResponse getItem(Long itemId) {
        Item item = itemRepository.findById(itemId).orElseThrow(EntityNotFoundException::new);
        ItemDetail findItemDetail = itemDetailRepository.findByItemNo(item.getNo());
        List<Files> findItemFiles = fileRepository.findByItemNo(item.getNo());

        return ItemResponse.builder()
                .itemName(item.getItemName())
                .itemCategory(item.getItemCategory())
                .itemPrice(findItemDetail.getItemPrice())
                .quantity(findItemDetail.getQuantity())
                .filesList(findItemFiles)
                .build();
    }

    @Transactional
    @Override
    public ItemResponse updateItem(Long itemId, ItemRequest itemRequest, List<MultipartFile> multipartFile) {
        List<Files> list = new ArrayList<>();
        // id 와 관련된 파일들 삭제하는 메소드
        // -> 미리 id와 관련되어있던 애들의 FILE_USEYN 을 update 해줌.
        Item item = itemRepository.findById(itemId).orElseThrow(EntityNotFoundException::new);
        ItemDetail findItemDetail = itemDetailRepository.findByItemNo(item.getNo());
        // item 안의 file 들의 useYN 을 update 함
        List<Files> findItemFiles = fileRepository.findByItemNo(item.getNo());
        for (Files file : findItemFiles) {
            file.updateUseYN("N");
            file.updateUpdateDateTime(LocalDateTime.now());
        }
        // 다시 파일들 업로드하는 메소드
        List<Files> fileInfos = uploadFiles(multipartFile);
        for (Files f : fileInfos) {
            f.setItemNo(item.getNo());
            f.setUseYn("Y");
            list.add(fileRepository.save(f));
        }
        // id 에 해당하는 애들 변경감지
        item.updateItem(itemRequest.getItemName(), itemRequest.getItemCategory(), LocalDateTime.now());
        // id 에 해당하는 애들 변경감지
        findItemDetail
                .updateItemDetail(item.getNo(), itemRequest.getItemPrice(), itemRequest.getQuantity(), LocalDateTime.now());

        return ItemResponse.builder()
                .itemName(item.getItemName())
                .itemCategory(item.getItemCategory())
                .itemPrice(findItemDetail.getItemPrice())
                .quantity(findItemDetail.getQuantity())
                .filesList(list)
                .build();
    }

    /**
     * findById 에서 찾은 Item 의 영속성이 종료되었기 때문에 지연로딩을 할 수 없어서 안 넣어주면 오류발생
     * 그래서 @Transactional 어노테이션으로 트랜잭션 내에 존재하도록 해줌
     */
    @Transactional
    @Override
    public boolean deleteItem(Long itemId) {
        Item item = deleteFiles(itemId, path);
        // 2. item 아이디로 item 삭제
        itemRepository.deleteById(item.getNo());
        itemDetailRepository.deleteById(item.getNo());

        return true;
    }

    private Item deleteFiles(Long itemId, String filePath) {
//        File deleteFile;
        Item item = itemRepository.findById(itemId).orElseThrow(EntityNotFoundException::new);
        List<Files> findItemFiles = fileRepository.findByItemNo(item.getNo());
        // 1. 파일리스트의 파일들 삭제
        // 파일리스트의 파일들을삭제
        for (Files file : findItemFiles) {
//            deleteFile = new File(filePath + file.getFileName());
            fileRepository.deleteById(file.getNo());
            // 실제로 file 이 존재하면 삭제
//            if (deleteFile.exists()) {
//                deleteFile.delete();
//            }
        }
        return item;
    }

    public List<Files> uploadFiles(List<MultipartFile> files) {
        String UPLOAD_PATH = path;
        // 파일 path 에 디렉토리가 없다면 디렉토리를 mkdir 로 생성
        if (!new File(path).exists()) {
            new File(path).mkdir();
        }
        UUID uuid = null;
        String originName = null;
        String type = null;
        List<Files> list = new ArrayList<>();
        try {
            for (int i = 0; i < files.size(); i++) {
                originName = files.get(i).getOriginalFilename(); //
                String[] tempStr = originName.split("\\."); // '.' (dot) 은 정규식 예약어라서 || 처리를 해줘야 한다.
                originName = tempStr[0];
                type = tempStr[1];

                uuid = UUID.randomUUID(); // 16 자리

                File newNameFile
//                        = new File(UPLOAD_PATH, uuid + "-" + originName + "-" + LocalDateTime.now() + "." + type);
                        = new File(path, uuid + "-" + originName + "." + type);

                // 인코딩하는 메서드
                // 파일타입 확인하는 메서드
                String fileType = fileTypeCheck(type); // JPEG or PDF

                // transferTo(File file) -> multipartFile 을 주어진 file 의 경로로 이동
                files.get(i).transferTo(newNameFile);

                Files fileInfo = Files.builder()
                        .fileName(newNameFile.getName())
                        .filePath(path)
                        .fileSize(files.get(i).getSize())
                        .fileType(fileType)
                        .fileRegistDateTime(LocalDateTime.now())
                        .build();

                list.add(fileInfo);
            }
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
        return list;
    }

    private String fileTypeCheck(String type) {
        if (type.equals(String.valueOf(FileType.jpeg))) {
            return FileType.jpeg.getValue();
        } else {
            return FileType.pdf.getValue();
        }
    }
}