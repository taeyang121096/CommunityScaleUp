package com.scaleup.authentication.dto;

import com.scaleup.authentication.entity.FileInfo;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.util.*;

@Builder
@Getter
public class ItemResponse {
    @NotNull
    private Long id;
    @NotNull
    private String name;
    @NotNull
    private Integer price;
    @NotNull
    private Integer stockQuantity;
    @NotNull
    private List<FileInfo> file = new ArrayList<>();
}
