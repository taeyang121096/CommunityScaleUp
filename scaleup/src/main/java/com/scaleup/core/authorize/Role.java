package com.scaleup.core.authorize;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Role {

    ROLE_USER("ROLE_USER","유저"),
    ROLE_ADMIN("ROLE_ADMIN","관리자");

    private final String value;
    private final String title;
}
