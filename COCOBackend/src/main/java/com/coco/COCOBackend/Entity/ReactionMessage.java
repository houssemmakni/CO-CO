package com.coco.COCOBackend.Entity;

import com.coco.COCOBackend.Enum.ReactionType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ReactionMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reactionid;
    @Enumerated(EnumType.STRING)
    private ReactionType type;
    @ManyToOne
    private User user;
    @ManyToOne
    @JsonIgnore
    private MessageChattrom msg;
}
