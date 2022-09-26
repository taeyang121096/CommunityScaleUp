package com.scaleup.authentication.service;

import com.scaleup.authentication.dto.LoginRequest;
import com.scaleup.authentication.dto.UserRequest;
import com.scaleup.authentication.dto.UserResponse;
import com.scaleup.authentication.entity.User;
import com.scaleup.authentication.repository.UserRepository;
import com.scaleup.core.authorize.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public UserResponse signUp(UserRequest request) {
        User findByUserId = userRepository.findByUserId(request.getUserId());
        User save = null;
        if (findByUserId == null) {
            save = userRepository.save(User.builder().
                    name(request.getName()).
                    email(request.getEmail()).
                    userId(request.getUserId()).
                    pw(request.getPw()).
                    sex(request.getSex()).
                    role(Role.ROLE_USER.getValue()).build()
            );
        } else {
            throw new DuplicateKeyException(String.format(
                    "이미 존재하는 회원입니다."
            ));
        }

        return UserResponse.builder().
                name(save.getName()).
                role(save.getRole())
                .build();
    }// 예외 처리를 어떻게 하지 ??

    @Override
    public UserResponse login(LoginRequest request) {
        User findUser = userRepository.findByUserId(request.getUserId());
        if (findUser == null)
            throw new NullPointerException();
        if (!request.getPw().equals(findUser.getPw()))
            throw new NullPointerException();
        else
            return UserResponse.builder()
                    .name(findUser.getName())
                    .role(findUser.getRole())
                    .build();
    }
}