package com.scaleup.authentication.dto;

import com.scaleup.core.authorize.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;


@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
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

}
