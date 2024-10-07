package com.coco.COCOBackend.Repo;

import com.coco.COCOBackend.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {
}