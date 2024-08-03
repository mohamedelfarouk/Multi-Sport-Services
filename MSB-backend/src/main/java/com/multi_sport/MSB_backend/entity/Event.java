package com.multi_sport.MSB_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private long eventId;

    @Column(name = "event_name")
    private String eventName;

    private String description;

    @Column(name = "registration_fee")
    private Double registrationFee;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    private Integer duration; // Assuming duration is in hours

    @Column(name = "max_participants")
    private Integer maxParticipants;

    @ManyToOne
    @JoinColumn(name = "organizer_id")
    private EventManager organizer;

    @ManyToMany
    @JoinTable(
        name = "event_facility",
        joinColumns = @JoinColumn(name = "event_id"),
        inverseJoinColumns = @JoinColumn(name = "facility_id")
    )
    private Set<Facility> facilities;

    @Column(name = "is_individual")
    private boolean isIndividual;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<IndividualParticipant> individualParticipants;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<TeamParticipant> teamParticipants;

    public void setParticipants(Set<IndividualParticipant> individualParticipants, Set<TeamParticipant> teamParticipants) {
        if (isIndividual) {
            this.individualParticipants = individualParticipants;
            this.teamParticipants = null;
        } else {
            this.individualParticipants = null;
            this.teamParticipants = teamParticipants;
        }
    }
}
