package com.scaleup.authentication.dto;

import lombok.*;

import javax.validation.constraints.NotNull;

@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemRequest {
    @NotNull
    private String name;
    @NotNull
    private Integer price;
    @NotNull
    private Integer stockQuantity;
}
