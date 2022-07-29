package com.scaleup.authentication.entity;


import com.scaleup.core.authorize.Role;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity
@Builder
@Getter
@DynamicInsert
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(name = "user_name")
    private String name;

    @Column(name = "user_email")
    private String email;

    @Column(name = "user_userId")
    private String userId;

    @Column(name = "user_pw")
    private String pw;

    @Column(name = "user_sex")
    private String sex;

    @Enumerated(EnumType.STRING)
    @ColumnDefault("'ROLE_USER'")
    private Role role;

//    public User(String name, String email, String userId, String pw, String sex, String role) {
//        this.name = name;
//        this.email = email;
//        this.userId = userId;
//        this.pw = pw;
//        this.sex = sex;
//        this.role = role;
//    }
}
