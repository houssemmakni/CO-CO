package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.MarketPlace;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductREpo extends JpaRepository<MarketPlace,Integer> {
}
