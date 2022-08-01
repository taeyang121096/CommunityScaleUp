package com.scaleup.authentication.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "item_details")
public class ItemDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_detail_no")
    private Long no;

    @NotNull
    private Long itemNo;
    @NotNull
    private int itemPrice;

    private String itemSize;

    private String itemInfo;

    private String itemProduceInfo;

    private LocalDateTime itemUpdateDate;
    @NotNull
    private int quantity;
}
