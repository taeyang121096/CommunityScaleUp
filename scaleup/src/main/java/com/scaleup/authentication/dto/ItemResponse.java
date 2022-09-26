package com.scaleup.authentication.dto;

import com.scaleup.authentication.entity.Files;
import lombok.Builder;
import lombok.Getter;

import java.util.*;

@Builder
@Getter
public class ItemResponse {
    private String itemName;
    private String itemCategory;
    private int itemPrice;
    private int quantity;
    private List<Files> filesList;
}