package com.multi_sport.MSB_backend.entity;

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
@Table(name = "team_participant")
public class TeamParticipant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "participant_id")
    private long participantId;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team;

    @Column(name = "registration_date")
    private Date registrationDate;

    @PrePersist
    protected void onRegister() {
        this.registrationDate = new Date();
    }
}
