package com.coco.COCOBackend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Student extends User  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id_user;
    private String specialite;
    private String classe;
    private boolean fumer;
    private String adresse_domicile;
}
