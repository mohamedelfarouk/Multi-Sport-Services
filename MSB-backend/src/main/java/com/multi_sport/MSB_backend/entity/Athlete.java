package com.multi_sport.MSB_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
public class Athlete extends User {
    @ManyToMany
    @JoinTable(
        name = "user_sport",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "sport_id")
    )
    private Set<Sport> sports;
    @ManyToMany
    @JoinTable(
            name = "user_facilities",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "facility_id")
    )
    private Set<Facility> myFacilities;
    @ManyToMany
//    @JoinTable(
//            name = "user_trainers",
//            joinColumns = @JoinColumn(name = "user_id"),
//            inverseJoinColumns = @JoinColumn(name = "user_id")
//    )
    private Set<Trainer> myTrainers;
    // New field for storing cart items
    @ManyToMany
    @JoinTable(
            name = "athlete_cart_items",
            joinColumns = @JoinColumn(name = "athlete_id"),
            inverseJoinColumns = @JoinColumn(name = "cart_item_id")
    )
    private Set<CartItem> cartItems;
}
