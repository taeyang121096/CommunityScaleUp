package com.scaleup.authentication.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Builder
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table(name = "boards")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "boards_no")
    private Long no;

    @Column(name = "boards_userNo")
    private Long userNo;
    @Column(name = "boards_writer")
    private String writer;
    @Column(name = "boards_title")
    private String title;
    @Column(name = "boards_content")
    private String content;
    @Column(name = "boards_views")
    private Integer views;
    @Column(name = "boards_category")
    private String category;

    @Column(name = "boards_create_date")
    private LocalDateTime createDate;
    @Column(name = "boards_update_date")
    private LocalDateTime updateDate;


    //==비즈니스 로직==//
    public void updateBoard(String title, String content, LocalDateTime updateDate) {
        this.title = title;
        this.content = content;
        this.updateDate = updateDate;
    }
}
