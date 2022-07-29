package com.scaleup.authentication.service;

import com.scaleup.authentication.dto.ItemRequest;
import com.scaleup.authentication.dto.ItemResponse;
import com.scaleup.authentication.entity.FileInfo;
import com.scaleup.authentication.entity.Item;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.util.*;

@Service
public interface ItemService {
    void downloadFile(Map<String, Object> param, Long itemId, HttpServletResponse response) throws Exception;

    ItemResponse uploadItem(ItemRequest itemRequest, List<MultipartFile> multipartFile);

    ItemResponse getItem(Long itemId);

    ItemResponse updateItem(Long itemId, ItemRequest itemRequest, List<MultipartFile> multipartFile);

    boolean deleteItem(Long itemId);
}
