package com.coco.COCOBackend.Entity;

import com.coco.COCOBackend.Enum.Category;
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
public class MarketPlace implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_product;
    @Enumerated(EnumType.STRING)
    private Category category;
    private String title;
    private Date created;
    private String description;
    private String city;
    private float coin;
    @OneToMany
    private Set<Media> image ;
    @ManyToOne
    User user;







}
