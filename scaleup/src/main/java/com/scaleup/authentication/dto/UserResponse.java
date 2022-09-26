package com.scaleup.authentication.dto;

import com.scaleup.core.authorize.Role;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Builder
@Getter
public class UserResponse {
    @NotNull
    private String name;
    @NotNull
    private String role;
}