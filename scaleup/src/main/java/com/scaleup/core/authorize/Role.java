package com.scaleup.core.authorize;

import lombok.Getter;

@Getter
public enum Role {
    ROLE_USER("사용자"), ROLE_ADMIN("관리자");
    private String value;

    private Role(String value) {
        this.value = value;
    }
}
