package com.scaleup.authentication.dto;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Builder
@Getter
public class UserRequest {
    @NotNull
    @Email
    private String email;
    @NotNull
    private String userId;
    @NotNull
    private String pw;
    @NotNull
    private String name;
    @NotNull
    private String sex;
    @NotNull
    private String role;
}
