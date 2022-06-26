package com.scaleup.authentication.dto;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


@Builder
@Getter
public class UserRequest {
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String id;
    @NotBlank
    private String pw;
    @NotBlank
    private String name;
    @NotBlank
    private String sex;
    @NotBlank
    private String role;

}
