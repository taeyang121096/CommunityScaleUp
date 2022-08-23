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
    @Column(name = "board_no")
    private Long no;

    @Column(name = "board_userNo")
    private Long userNo;
    @Column(name = "board_writer")
    private String writer;
    @Column(name = "board_title")
    private String title;
    @Column(name = "board_content")
    private String content;
    @Column(name = "board_views")
    private Integer views;
    @Column(name = "board_category")
    private String category;

    @Column(name = "board_create_date")
    private LocalDateTime createDate;
    @Column(name = "board_update_date")
    private LocalDateTime updateDate;


    //==비즈니스 로직==//
    public void updateBoard(String title, String content, LocalDateTime updateDate) {
        this.title = title;
        this.content = content;
        this.updateDate = updateDate;
    }
}
