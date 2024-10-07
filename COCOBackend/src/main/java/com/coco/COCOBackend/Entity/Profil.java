package com.coco.COCOBackend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Profil implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstname ;
    private String Last_name;
    private LocalDate Birthday;
    private String gendre;
    private String phone;
    @OneToOne
    private Media photoProfil;
    private LocalDate created;
    private Boolean is_admin;
    private Boolean smoker;
    @OneToOne
    private User user;




}
