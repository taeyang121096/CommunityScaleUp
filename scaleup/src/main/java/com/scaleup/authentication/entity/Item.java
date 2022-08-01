package com.scaleup.authentication.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_no")
    private Long no;
    @NotNull
    private String itemName;
    @NotNull
    private String itemCategory;
    @NotNull
    private LocalDateTime itemRegistDate;

    private LocalDateTime itemUpdateDate;
}
