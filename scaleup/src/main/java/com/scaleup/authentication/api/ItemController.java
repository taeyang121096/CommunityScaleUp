package com.scaleup.authentication.api;

import com.scaleup.authentication.dto.ItemRequest;
import com.scaleup.authentication.dto.ItemResponse;
import com.scaleup.authentication.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("api")
public class ItemController {
    private final ItemService itemService;

    /**
     * 아이템 등록 (POST) - 판매자만 가능, ROLE_ADMIN 이어야 함
     */
    @PostMapping("/item/save")
//    public ResponseEntity<ItemResponse> saveItem(User user, ItemRequest itemRequest,
//    @RequestPart(name = "image")  MultipartFile imgFile) throws Exception {
//        ItemResponse itemResponse = null;
//        if(user.getRole().equals("ROLE_ADMIN")){
//            itemResponse = itemService.saveItem(itemRequest, imgFile)     ;
//        }
//        return ResponseEntity.ok(itemResponse);
//    }
    public ResponseEntity<ItemResponse> saveItem(@RequestPart(name = "data") ItemRequest itemRequest,
                                                 @RequestPart(name = "files") List<MultipartFile> files) throws Exception {
//        ItemResponse itemResponse = itemService.saveItem(itemRequest);
        ItemResponse itemResponse = itemService.uploadItem(itemRequest, files);
        return ResponseEntity.ok(itemResponse);
    }

    /**
     * 아이템 상세정보
     */
    @GetMapping("/item/{itemId}")
    public ResponseEntity<ItemResponse> getItem(@PathVariable("itemId") Long itemId) {
        ItemResponse itemResponse = itemService.getItem(itemId);
        return ResponseEntity.ok(itemResponse);
    }

    /**
     * 아이템 삭제 + 아이템과 관련된 이미지, 파일 등을 모두 삭제
     */
    @GetMapping("item/{itemId}/delete")
    public ResponseEntity<?> deleteItem(@PathVariable("itemId") Long itemId) {
        if (!itemService.deleteItem(itemId)) {
            return new ResponseEntity<String>("fail", HttpStatus.NOT_IMPLEMENTED);
        }
        return new ResponseEntity<String>("success", HttpStatus.OK);
    }

    /**
     * 아이템 수정 (GET) - 수정하고 싶은 아이템을 찾아와 수정한다. 수정버튼 눌렀을 때 원래 값이 입력되어있게 끔 구현
     */
    @GetMapping("/item/{itemId}/edit")
    public ResponseEntity<ItemResponse> updateItemForm(@PathVariable("itemId") Long itemId) {
        ItemResponse itemResponse = null;
        try {
            itemResponse = itemService.getItem(itemId);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<ItemResponse>(itemResponse, HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(itemResponse);
    }

    /**
     * 아이템 수정 (POST) - 입력된 폼을 바탕으로 아이템을 수정한다.
     * 아이템을 수정할때 파일 부분은 어떻게 해결할까 ?
     * --> 1. 그냥 다 삭제하고 다시 올리게 한다.
     * --> 2. 바꾸고 싶은 파일만 선택해서 바꾸게 한다. => 이건 너무 빡센데?
     * 아니.. 변경감지로 하기엔 파일부분이 너무 애매함..
     */
    @PostMapping("/item/{itemId}/edit")
    public ResponseEntity<ItemResponse> updateItem(@PathVariable("itemId") Long itemId,
                                                   @RequestPart(name = "data") ItemRequest itemRequest,
                                                   @RequestPart(name = "files") List<MultipartFile> files) throws Exception {
        ItemResponse itemResponse = null;
        try {
            itemResponse = itemService.updateItem(itemId, itemRequest, files);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<ItemResponse>(itemResponse, HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(itemResponse);
    }

    /**
     * 상품 파일 다운로드
     */
    @GetMapping("/item/{itemId}/download")
    public void downloadItemFile(@RequestParam Map<String, Object> param,
                                 @PathVariable("itemId") Long itemId,
                                 HttpServletResponse response) throws Exception {
        itemService.downloadFile(param, itemId, response);
    }
}
