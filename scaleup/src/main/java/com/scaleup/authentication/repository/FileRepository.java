package com.scaleup.authentication.repository;

import com.scaleup.authentication.entity.Files;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FileRepository extends JpaRepository<Files,Long> {
    List<Files> findByItemNo(Long itemId);
}
