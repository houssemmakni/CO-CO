package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.Events;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventsRepository extends JpaRepository<Events, Integer> {
}