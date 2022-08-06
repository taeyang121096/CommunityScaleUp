package com.scaleup.authentication.repository;

import com.scaleup.authentication.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUserId(String userId);
}
