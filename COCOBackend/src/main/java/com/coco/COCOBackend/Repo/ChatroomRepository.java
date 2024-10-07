package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.Chatroom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatroomRepository extends JpaRepository<Chatroom, Integer> {
}