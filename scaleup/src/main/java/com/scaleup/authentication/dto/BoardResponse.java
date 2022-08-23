package com.scaleup.authentication.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BoardResponse {
    private String writer;
    private String title;
    private String content;
    private Integer views;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
}
