package com.multi_sport.MSB_backend.entity;

import jakarta.persistence.Entity;
 import lombok.Getter;
import lombok.Setter;

 
@Getter
@Setter
@Entity
public class Trainer extends User { 
    private String packages;
}

