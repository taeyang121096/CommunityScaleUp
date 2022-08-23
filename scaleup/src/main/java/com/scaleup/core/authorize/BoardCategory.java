package com.scaleup.core.authorize;

import lombok.Getter;

@Getter
public enum BoardCategory {
    Total("전체"), Humor("유머");
    private String value;

    private BoardCategory(String value) {
        this.value = value;
    }
}
