package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.ReactionMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReactionRepo extends JpaRepository<ReactionMessage, Integer> {
}
