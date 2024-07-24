package entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "facility")
public class Facility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "facility_id")
    private long facilityId;

    @Column(name = "facility_name")
    private String facilityName;

    @Enumerated(EnumType.STRING)
    @Column(name = "facility_type")
    private FacilityType facilityType;

    private String address;

    private String location;

    @Column(name = "phone_number")
    private String phoneNumber;

    private String email;

    private double ratings;

    private String amenities;

    @ManyToMany(mappedBy = "facilities")
    private Set<Event> events;

    @OneToMany(mappedBy = "facility")
    private Set<Booking> bookings;
}
