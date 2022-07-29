package com.scaleup.authentication.repository;

import com.scaleup.authentication.entity.Item;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemRepository extends CrudRepository<Item, Long> {
    @Query("select i from Item i join fetch i.fileList f where f.item.id = :itemId")
    Item findAllWithFileList(@Param("itemId")Long itemId);

    Item findByName(String name);
}
