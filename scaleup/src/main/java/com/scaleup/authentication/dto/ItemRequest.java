package com.scaleup.authentication.dto;

import lombok.*;

import javax.validation.constraints.NotNull;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ItemRequest {
    @NotNull
    private String itemName;
    @NotNull
    private String itemCategory;
    @NotNull
    private int itemPrice;
    @NotNull
    private int quantity;
    @NotNull
    private String itemInfo;
    @NotNull
    private String itemProduceInfo;
    @NotNull
    private String itemSize;
}
