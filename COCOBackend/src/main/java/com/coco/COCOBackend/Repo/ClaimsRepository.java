package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.Claims;
import com.coco.COCOBackend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClaimsRepository extends JpaRepository<Claims, Integer> {
    public Claims findByIdClaims (Integer idClaims);
    List<Claims> findByUser(User u);
}