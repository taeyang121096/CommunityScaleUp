package com.scaleup.authentication.api;

import com.scaleup.authentication.dto.LoginRequest;
import com.scaleup.authentication.dto.Register;
import com.scaleup.authentication.dto.UserRequest;
import com.scaleup.authentication.dto.UserResponse;
import com.scaleup.authentication.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;

@RequiredArgsConstructor
@RestController
@RequestMapping("api")
public class UserController {

    private final UserService userService;

    @PostMapping("/user/signup")
    public ResponseEntity<UserResponse> signup(@RequestBody @Valid UserRequest request) {
        UserResponse response = userService.signUp(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/users")
    public Register registers() {
        System.out.println("서버 접근");
        Register register = Register.builder()
                .id(1)
                .username("이태양")
                .password("taeyang")
                .email("taeyang121@naver.com")
                .build();
        return register;
    }

    @PostMapping("/user/login")
    public ResponseEntity<UserResponse> login(@RequestBody @Valid LoginRequest request) {
        UserResponse response = userService.login(request);
        return ResponseEntity.ok(response);
    }
}