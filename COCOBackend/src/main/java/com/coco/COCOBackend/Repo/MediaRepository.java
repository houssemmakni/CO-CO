package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.Media;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MediaRepository extends JpaRepository<Media, Integer> {
}