package com.multi_sport.MSB_backend.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class FacilityManager extends User {
    private String city;
    private String state;
    private String postalCode;
    private String country;
}
