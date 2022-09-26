package com.scaleup.authentication.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity
@Builder
@Getter
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "items_no")
    private Long no;
    @NotNull
    @Column(name = "items_name")
    private String itemName;
    @NotNull
    @Column(name = "items_category")
    private String itemCategory;
    @NotNull
    @Column(name = "items_regist_date")
    private LocalDateTime itemRegistDate;

    private LocalDateTime itemUpdateDate;

    //==비즈니스 로직==//
    public void updateItem(String itemName, String itemCategory, LocalDateTime now) {
        this.itemName = itemName;
        this.itemCategory = itemCategory;
        this.itemUpdateDate = now;
    }
}
