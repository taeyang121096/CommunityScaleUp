package com.scaleup.authentication.entity;


import lombok.*;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Getter
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_no")
    private Long no;

    @Column(name = "user_name")
    private String name;

    @Column(name = "user_email")
    private String email;

    @Column(name = "user_id")
    private String id;

    @Column(name = "user_pw")
    private String pw;

    @Column(name = "user_sex")
    private String sex;

    @Column(name = "user_role")
    private String role;

    @Builder
    public User(String name, String email, String id, String pw, String sex, String role) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.pw = pw;
        this.sex = sex;
        this.role = role;
    }


}
