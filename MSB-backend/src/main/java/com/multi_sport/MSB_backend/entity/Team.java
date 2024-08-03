package com.multi_sport.MSB_backend.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "team")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_id")
    private long teamId;

    private String name;

    @ManyToOne
    @JoinColumn(name = "sport_id")
    private Sport sport;

    @Column(name = "creation_date", updatable = false)
    private Date creationDate;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Set<TeamMember> teamMembers = new HashSet<>();

    @Column(name = "number_of_members")
    private Integer numberOfMembers;

    @PrePersist
    protected void onCreate() {
        this.creationDate = new Date();
        this.numberOfMembers = teamMembers.size();
    }

    public void addTeamMember(TeamMember teamMember) {
        teamMembers.add(teamMember);
        teamMember.setTeam(this);
        numberOfMembers = teamMembers.size();
    }

    public void removeTeamMember(TeamMember teamMember) {
        teamMembers.remove(teamMember);
        teamMember.setTeam(null);
        numberOfMembers = teamMembers.size();
    }
}