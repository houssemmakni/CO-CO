package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.MessageChattrom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageChattromRepo extends JpaRepository<MessageChattrom,Integer> {
}
