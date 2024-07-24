package entity;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
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

    @ManyToMany(mappedBy = "followingUsers")
    private Set<User> followers;
	
	private String gender;
	
	/*
	 * @Column(nullable = true, name = "profile_picture") private String
	 * profilePicture;
	 */

    @Column(nullable = true)
    private String address;

	/*
	 * @Column(nullable = true) 
	 * private String location;
	 */
    
    @PrePersist
    @PreUpdate
    private void updateFields() {
        this.name = firstName + " " + lastName;
        if (this.creationDate == null) {
            this.creationDate = new Date();
        }
    }
}

