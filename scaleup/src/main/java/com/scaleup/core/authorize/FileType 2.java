package com.scaleup.core.authorize;

import lombok.Getter;

@Getter
public enum FileType {
    jpeg("이미지"), pdf("피디에프");
    private String value;

    private FileType(String value) {
        this.value = value;
    }
}
