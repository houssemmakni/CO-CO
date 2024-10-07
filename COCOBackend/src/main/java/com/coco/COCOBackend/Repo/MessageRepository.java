package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Integer> {
}