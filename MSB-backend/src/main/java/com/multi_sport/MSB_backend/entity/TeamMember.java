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
@Table(name = "team_member")
@NoArgsConstructor
@AllArgsConstructor
public class TeamMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_member_id")
    private long teamMemberId;

    @ManyToOne
    @JoinColumn(name = "team_id")
    @JsonBackReference
    private Team team;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Athlete user;

    @Column(name = "join_date", updatable = false)
    private Date joinDate;

    @Column(name = "is_captain")
    private boolean isCaptain;

    @PrePersist
    protected void onJoin() {
        this.joinDate = new Date();
    }
}