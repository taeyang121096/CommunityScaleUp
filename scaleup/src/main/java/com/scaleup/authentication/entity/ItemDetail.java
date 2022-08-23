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
@Table(name = "item_details")
public class ItemDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_detail_no")
    private Long no;

    @NotNull
    @Column(name = "item_no")
    private Long itemNo;
    @NotNull
    @Column(name = "item_detail_price")
    private int itemPrice;
    @NotNull
    @Column(name = "item_detail_quantity")
    private int quantity;
    @NotNull
    @Column(name = "item_detail_size")
    private String itemSize;
    @NotNull
    @Column(name = "item_detail_info")
    private String itemInfo;
    @NotNull
    @Column(name = "item_detail_produce_info")
    private String itemProduceInfo;
    @NotNull
    @Column(name = "item_detail_regist_date")
    private LocalDateTime itemRegisteDate;

    private LocalDateTime itemUpdateDate;

    //==비즈니스 로직==//
    public void updateItemDetail(Long no, int itemPrice, int quantity, LocalDateTime now) {
        this.no = no;
        this.itemPrice = itemPrice;
        this.quantity = quantity;
        this.itemUpdateDate = now;
    }
}
