package com.scaleup.authentication.repository;

import com.scaleup.authentication.entity.FileInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface FileInfoRepository extends JpaRepository<FileInfo, Long> {
    @Query(value = "select f from FileInfo f where f.item.id = :id")
    List<FileInfo> findByItemId(@Param("id")Long itemId);
}
