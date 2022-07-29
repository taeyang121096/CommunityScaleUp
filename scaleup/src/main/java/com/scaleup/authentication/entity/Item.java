package com.scaleup.authentication.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity
@Builder
@Getter
// Setter 을 사용하기 보단 비즈니스 로직으로 값을 정해주는것이 가장 좋음
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long id;

    @Column(name = "item_name")
    private String name;

    @Column(name = "item_price")
    private Integer price;

    @Column(name = "item_quantity")
    private Integer stockQuantity; //재고

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<FileInfo> fileList = new ArrayList<>();

    public void updateItem(String name, Integer price, Integer stockQuantity, List<FileInfo> fileList) {
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.fileList = fileList;
    }
}
