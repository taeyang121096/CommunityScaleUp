package com.scaleup.authentication.repository;

import com.scaleup.authentication.entity.File;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<File,Long> {
}
