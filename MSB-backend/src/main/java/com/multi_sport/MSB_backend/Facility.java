package com.example.multi_sport;

 
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Facility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long facilityId;
    private String facilityName;
    private String location;
    private String facilityType;
    private String address;
    private String amenities;
    @Column(unique = true)
    private String email;
    private String phoneNumber;
    private double ratings;

    @ManyToOne
    @JoinColumn(name = "facility_manager_id")
    private User facilityManager;

    @OneToMany(mappedBy = "facility", cascade = CascadeType.ALL)
    private List<Booking> bookings;

    @OneToMany(mappedBy = "facility", cascade = CascadeType.ALL)
    private List<Reviews> facilityReviews;

    public Long getFacilityId() {
        return facilityId;
    }
    public void setFacilityId(Long facilityId) {
        this.facilityId = facilityId;
    }
    public String getFacilityName() {
        return facilityName;
    }
    public void setFacilityName(String facilityName) {
        this.facilityName = facilityName;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getFacilityType() {
        return facilityType;
    }
    public void setFacilityType(String facilityType) {
        this.facilityType = facilityType;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getAmenities() {
        return amenities;
    }
    public void setAmenities(String amenities) {
        this.amenities = amenities;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public double getRatings() {
        return ratings;
    }
    public void setRatings(double ratings) {
        this.ratings = ratings;
    }

    
    
}
