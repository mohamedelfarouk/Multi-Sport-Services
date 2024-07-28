package com.multi_sport.MSB_backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class TrainerPackage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "package_id")
    private Long packageId;

    @ManyToOne
    @JoinColumn(name = "trainer_id")
    private Trainer trainer;

    private String name;
    private String description;
    private double price;
    private boolean isLongTerm;
}

