//package com.scaleup.core.authorize.upload.controller;
//
//import com.scaleup.authentication.entity.FileInfo;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.*;
//import java.util.*;
//
//@RequiredArgsConstructor
//@RestController
//@RequestMapping("upload")
//public class UploadController {
//
//    /**
//     * 1. UUID 로 중복 제거하면서 할 수 있는데, 이미지를 GetMapping 할 때 어떤식으로 찾아올 수 있을까를 생각해보고싶음.
//     * ex) {UUID} : 너무 지저분해짐, {ID} : 어떤 ID 를 ?;; 잘 모르겠음.
//     * 2. @Request 로 Item item 을 받아서 이미지를 업로드를 해야하지않나 ? 그런 것 없이 그냥 업로드? 그건 좀 이상함
//     * <p>
//     * 파일 업로드 size 도 제한
//     * 3. 아니면 ItemRequest 같은 데다가 MultipartFile multipart 를 변수로 넣어 놓고,
//     * Service 단에서 이미지를 저장하는 방식이나.. 이미지 업로드하기 버튼이 있다고 하면 아니겟지만 ?
//     * 4. 이미지 파일 크기 제한 같은건 application.properties 에 뭐 추가하면 되긴 하는데..
//     * 5. 이거를 서비스 단으로 옮겨가지고 db 저장이나 그런걸 구현해서, item 용 업로드나 user 용 업로드로 사용해도 되려나 ?
//     */
//    @GetMapping(value = "/{itemId}/image/{name}", produces = MediaType.IMAGE_JPEG_VALUE)
//    public ResponseEntity<byte[]> getImg(@PathVariable("name") String name) throws IOException {
//        String DATA_DIRECTORY
//                = System.getProperty("user.dir") + "/src/main/resources/static/static/files/"; // 직접 경로를 정해 줌
//        // String DATA_DIRECTORY = @PathVariable 의 id 로 경로를 찾아온다는데 이 방법도 찾아보도록 하자
//        InputStream imageStream = new FileInputStream(
//                DATA_DIRECTORY + "/" + name); // 경로 + 이름으로 읽어 옴
//        // 파일 이름으로 읽어올 파일의 경로 설정
//        ByteArrayOutputStream buffer = new ByteArrayOutputStream();
//        int read;
//        byte[] imageByteArray = new byte[imageStream.available()];
//        while ((read = imageStream.read(imageByteArray, 0, imageByteArray.length)) != -1) {
//            buffer.write(imageByteArray, 0, read);
//        }
//
//        buffer.flush();
//        byte[] targetArray = buffer.toByteArray();
//        imageStream.close();
//
//        return new ResponseEntity<byte[]>(targetArray, HttpStatus.OK);
//    }
//
//    @PostMapping("/{itemId}/image")
//    public ResponseEntity<List<FileInfo>> uploadFile(
//            @RequestPart(name = "image") List<MultipartFile> files) throws IllegalStateException, IOException {
//        String UPLOAD_PATH
//                = System.getProperty("user.dir") + "/src/main/resources/static/static/files/";
//        UUID uuid = null;
//        String originName = null;
//        String type = null;
//        List<FileInfo> list = new ArrayList<>();
//        try {
//            for (int i = 0; i < files.size(); i++) {
//                originName = files.get(i).getOriginalFilename(); //
//                String[] tempStr = originName.split("\\."); // '.' (dot) 은 정규식 예약어라서 || 처리를 해줘야 한다.
//                originName = tempStr[0];
//                type = tempStr[1];
//
//                uuid = UUID.randomUUID();
//
////                File newFile = new File(UPLOAD_PATH, uuid + "-" + originName + "." + type);
//                File newFile = new File(UPLOAD_PATH, originName + "." + type);
//                // transferTo(File file) -> multipartFile 을 주어진 file 의 경로로 이동
//                files.get(i).transferTo(newFile);
//                FileInfo fileInfo = FileInfo.builder().originFilename(originName + "." + type)
//                        .storeFilename(uuid + "-" + originName + "." + type)
//                        .build();
//                list.add(fileInfo);
//            }
//        } catch (IOException e) {
//            System.out.println(e);
//            return ResponseEntity.badRequest().build();
//        }
//
//        return ResponseEntity.ok(list);
//    }
//}
