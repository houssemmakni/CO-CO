package com.coco.COCOBackend.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Message implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer  messageId;

    String body;
    LocalDateTime date;

    @JsonIgnore
    @ManyToOne
    User sender;
    @JsonIgnore
    @ManyToOne
    User reciver;
    @JsonIgnore
    @ManyToOne
    Chatroom chatroom;
    @OneToMany
    List<Media> medias;

}
