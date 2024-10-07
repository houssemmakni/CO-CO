package com.coco.COCOBackend.Entity;

import com.coco.COCOBackend.Enum.Type_annon_Collocation;
import com.coco.COCOBackend.Enum.Type_logement;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnnonceCollocation  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_anno_colo;
    private String location;
    private Date date_disponiblite;
    private int nbrChambre;
    private String meuble;
    private String photos;
    private String cautionnement;
    private String sexe;
    @Enumerated(EnumType.STRING)
    private Type_logement typeLogement;
    private String description;
    private float montantContrubition;
    @Enumerated(EnumType.STRING)
    private Type_annon_Collocation typeAnnonCollocation;
    private int nbrPersonne;
    @ManyToMany(mappedBy = "annonceCollocations")
    private Set<Avis> avis;
    @ManyToOne
    private User user;







}
