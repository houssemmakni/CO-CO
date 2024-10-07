package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.Chatrromassistance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatrromAssitanceRepo extends JpaRepository<Chatrromassistance,Integer> {
}
