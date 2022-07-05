package com.scaleup.authentication.entity;

import com.scaleup.authentication.dto.UserRequest;
import com.scaleup.authentication.repository.UserRepository;
import com.scaleup.core.authorize.Role;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
class UserTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    @DisplayName("멤버 회원가입")
    void signUp(){
        // given
        UserRequest request = UserRequest.builder()
                .name("김태강")
                .email("ktk@naver.com")
                .userId("zizoen123")
                .pw("1234")
                .sex("male")
                .build();
        // when
        User save = userRepository.save(User.builder().
                name(request.getName()).
                email(request.getEmail()).
                userId(request.getUserId()).
                pw(request.getPw()).
                sex(request.getSex()).
                role(Role.ROLE_USER.getValue()).build());

        // then
        assertThat(request.getName()).isEqualTo(save.getName());
        assertThat(request.getEmail()).isEqualTo(save.getEmail());
        assertThat(request.getUserId()).isEqualTo(save.getUserId());
        assertThat(request.getPw()).isEqualTo(save.getPw());
        assertThat(request.getSex()).isEqualTo(save.getSex());
        assertThat(Role.ROLE_USER).isEqualTo(Role.valueOf(save.getRole()));
        assertThat(save.getId()).isEqualTo(1);
    }



}