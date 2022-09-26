package com.scaleup.authentication.repository;

import com.scaleup.authentication.entity.ItemDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemDetailRepository extends JpaRepository<ItemDetail,Long> {
    ItemDetail findByItemNo(Long no);
}
