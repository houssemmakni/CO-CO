package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.ReponseMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReponseRepo extends JpaRepository<ReponseMessage, Integer> {
}
