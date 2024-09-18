package com.multi_sport.MSB_backend.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "facility")
public class Facility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "facility_id")
    private long facilityId;

    private String facilityName;

    @Enumerated(EnumType.STRING)
    private FacilityType facilityType;

    private String address;
    private String location;
    private String phoneNumber;
    private String email;
    private Double ratings;
    private String amenities;

    @ManyToMany(mappedBy = "facilities")
    private Set<Event> events;

    @OneToMany(mappedBy = "facility")
    @JsonManagedReference
    private Set<Booking> bookings;

    @ManyToOne
    @JoinColumn
    private FacilityManager facilityManager;
}
