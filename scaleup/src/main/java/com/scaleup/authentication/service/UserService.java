package com.scaleup.authentication.service;

import com.scaleup.authentication.dto.UserRequest;
import com.scaleup.authentication.dto.UserResponse;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    UserResponse signUp(UserRequest request);

    UserResponse login(UserRequest request);
}
