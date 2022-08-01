package com.scaleup.authentication.entity;


import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Getter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;
    @NotNull
    @Column(name = "user_name", length = 15)
    private String name;
    @NotNull
    @Column(name = "user_email", length = 32)
    private String email;
    @NotNull
    @Column(name = "user_userId", length = 20)
    private String userId;
    @NotNull
    @Column(name = "user_pw", length = 20)
    private String pw;
    @NotNull
    @Column(name = "user_sex", length = 1)
    private String sex;
    @NotNull
    @Column(name = "user_role", length = 10)
    private String role;

    @Builder
    public User(String name, String email, String userId, String pw, String sex, String role) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.pw = pw;
        this.sex = sex;
        this.role = role;
    }


}
