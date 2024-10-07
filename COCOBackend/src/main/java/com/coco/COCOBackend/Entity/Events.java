package com.coco.COCOBackend.Entity;

import com.coco.COCOBackend.Enum.Type_Event;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Events implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_events;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Media> poster;
    private String title;
    private String description;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime startDate;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime endDate;
    private String location_event;
    @Enumerated(EnumType.STRING)
    private Type_Event event;
    private Date created;
    @ManyToOne
    User user;





}
