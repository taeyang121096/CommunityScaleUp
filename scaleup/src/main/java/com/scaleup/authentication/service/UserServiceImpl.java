package com.scaleup.authentication.service;

import com.scaleup.authentication.dto.LoginRequest;
import com.scaleup.authentication.dto.UserRequest;
import com.scaleup.authentication.dto.UserResponse;
import com.scaleup.authentication.entity.User;
import com.scaleup.authentication.repository.UserRepository;
import com.scaleup.core.authorize.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public UserResponse signUp(UserRequest request) {
        User save = userRepository.save(User.builder().
                name(request.getName()).
                email(request.getEmail()).
                userId(request.getUserId()).
                pw(request.getPw()).
                sex(request.getSex()).
                build()
        );

        return UserResponse.builder().
                userId(save.getUserId()).
                name(save.getName()).build();

    }// 예외 처리를 어떻게 하지 ??

    @Override
    public UserResponse login(LoginRequest request) {
        User findUser = userRepository.findByUserId(request.getUserId());
        if (findUser == null)
            throw new NullPointerException();
        if (!request.getPw().equals(findUser.getPw()))
            throw new NullPointerException();
        else
            return UserResponse.builder().
                    userId(findUser.getUserId()).
                    name(findUser.getName()).build();
    }
}
