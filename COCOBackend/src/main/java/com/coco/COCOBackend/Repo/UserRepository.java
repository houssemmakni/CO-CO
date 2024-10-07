package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}