package com.coco.COCOBackend.Entity;

import com.coco.COCOBackend.Enum.TypeCovoiturage;
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
public class AnnonceCarpoling  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_anno_cov;
    private String destination;
    private Date heureDepart;
    private String lieuDepart;
    private int nbrPlaceDisponibles;
    private float montantContribution;
    private String voiture;
    private String point_intermediare;
    @Enumerated(EnumType.STRING)
    private TypeCovoiturage typeCovoiturage;
    private Boolean bagage;
    @ManyToOne
    private User user;
    @ManyToMany
    private Set<Avis> avis;




}
