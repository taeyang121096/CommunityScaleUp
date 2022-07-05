package com.scaleup.authentication.api;

import com.google.gson.Gson;
import com.scaleup.authentication.dto.UserRequest;
import com.scaleup.authentication.dto.UserResponse;
import com.scaleup.authentication.service.UserService;
import com.scaleup.core.authorize.Role;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;

@ExtendWith(MockitoExtension.class)
class UserControllerTest {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService userService;

    private MockMvc mockMvc;

    @BeforeEach
    public void init(){
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }

    @DisplayName("회원가입")
    @Test
    void signUp() throws Exception {
//        given
        UserRequest request = UserRequest.builder()
                .name("김태강")
                .email("ktk@naver.com")
                .userId("zizoen123")
                .pw("1234")
                .sex("male")
                .build();
        UserResponse response = UserResponse.builder()
                .name("김태강")
                .role(Role.ROLE_USER)
                .build();
        doReturn(response).when(userService)
                .signUp(any(UserRequest.class));
//        when
        mockMvc.perform(
                MockMvcRequestBuilders.post("/user/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new Gson().toJson(request))
        );

//        then



    }


}