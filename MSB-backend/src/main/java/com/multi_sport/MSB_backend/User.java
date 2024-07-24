package com.example.multi_sport;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

import java.util.Date;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String firstName;
    private String lastName;
    @Column(unique =true)    
    private String email;
    private String username;
    private Date birthDate;
    private Date creationDate;
    private String phoneNumber;
    private String password;
    private String profilePicture;

   @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Reviews> review;

   @OneToMany(mappedBy = "trainer",cascade = CascadeType.ALL)
    private  List<TrainingPackage> trainerPackage;
   
   @OneToMany(mappedBy = "trainer",cascade = CascadeType.ALL)
    private List<TrainingSession> trainingSessions;
   
   @OneToMany(mappedBy = "trainer",cascade = CascadeType.ALL)
    private List<Reviews> trainerReviews;
   @OneToMany(mappedBy = "facilityManger",cascade = CascadeType.ALL)
    private List<Facility> facilities; 



    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public Date getBirthDate() {
        return birthDate;
    }
    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }
    public Date getCreationDate() {
        return creationDate;
    }
    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getProfilePicture() {
        return profilePicture;
    }
    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }
 

 }

