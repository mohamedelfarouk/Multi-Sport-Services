package com.multi_sport.MSB_backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private long bookingId;

    @ManyToOne
    @JoinColumn(name = "athlete_id", nullable = true)
    private Athlete athlete;
    
    @ManyToOne
    @JoinColumn(name = "trainer_id", nullable = true)
    private Trainer trainer;    

    @ManyToOne
    @JoinColumn(name = "facility_id")
    @JsonBackReference
    private Facility facility;

    private Date bookingDate;
    private Date startTime;
    private Date endTime;
    private Double totalCost;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    private Boolean isSession;

    @PrePersist
    protected void onBook() {
        this.bookingDate = new Date();
    }
}
