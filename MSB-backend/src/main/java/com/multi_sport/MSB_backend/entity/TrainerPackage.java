package com.multi_sport.MSB_backend.entity;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Embeddable
public class TrainerPackage {

    private String name;
    private String description;
    private Double price;
    private Boolean isLongTerm;
}
