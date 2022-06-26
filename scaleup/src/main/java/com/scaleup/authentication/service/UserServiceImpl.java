package com.scaleup.authentication.service;

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
                id(request.getId()).
                pw(request.getPw()).
                sex(request.getSex()).
                role(Role.ROLE_USER.getValue()).build()
        );

        return UserResponse.builder().
                name(save.getName()).build();
    }
}
