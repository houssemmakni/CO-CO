package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
}