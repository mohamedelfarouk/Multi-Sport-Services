package com.multi_sport.MSB_backend.entity;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
public class Trainer extends User {

    @ElementCollection(fetch = FetchType.LAZY)
    private Set<TrainerPackage> packages;

}
