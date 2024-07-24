package com.multi_sport.MSB_backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "role")
public abstract class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "first_name")
    private String firstName;
    
    @Column(name = "last_name")
    private String lastName;
    
    private String name;
    
    private String email;
    
    private String username;
    
    @Column(name = "birth_date")
    private Date birthDate;
    
    @Column(name = "creation_date", updatable = false)
    private Date creationDate;
    
    @Column(name = "phone_number")
    private String phoneNumber;
    
    private String password;
    
    @Column(name = "number_of_following")
    private int numFollowing;

    @Column(name = "number_of_followers")	
	private int numFollowers;
    
    @ManyToMany
    @JoinTable(
        name = "user_following",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "following_id")
    )
    private Set<User> following;

    @ManyToMany(mappedBy = "following")
    private Set<User> followers;
	
	private String gender;

    @Column(nullable = true)
    private String address;
    
    @PrePersist
    @PreUpdate
    private void updateFields() {
        this.name = firstName + " " + lastName;
        if (this.creationDate == null) {
            this.creationDate = new Date();
        }
    }
}
