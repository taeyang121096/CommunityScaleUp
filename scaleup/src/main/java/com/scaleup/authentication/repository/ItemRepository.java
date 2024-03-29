package com.scaleup.authentication.repository;

import com.scaleup.authentication.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item,Long> {
    Item findByItemName(String itemName);
}
