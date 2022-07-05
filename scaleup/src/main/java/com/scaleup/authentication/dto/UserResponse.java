package com.scaleup.authentication.dto;

import com.scaleup.core.authorize.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    @NotNull
    private String name;
    @NotNull
    private Role role;
}
