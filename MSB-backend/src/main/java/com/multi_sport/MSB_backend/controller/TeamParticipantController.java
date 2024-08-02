package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.TeamParticipant;
import com.multi_sport.MSB_backend.repository.TeamParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/team-participants")
public class TeamParticipantController {

    @Autowired
    private TeamParticipantRepository teamParticipantRepository;

    @PostMapping("/create")
    public ResponseEntity<TeamParticipant> createTeamParticipant(@RequestBody TeamParticipant teamParticipant) {
        try {
            TeamParticipant createdTeamParticipant = teamParticipantRepository.save(teamParticipant);
            return new ResponseEntity<>(createdTeamParticipant, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<TeamParticipant> getAllTeamParticipants() {
        return teamParticipantRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamParticipant> getTeamParticipantById(@PathVariable Long id) {
        Optional<TeamParticipant> teamParticipant = teamParticipantRepository.findById(id);
        return teamParticipant.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                              .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeamParticipant> updateTeamParticipant(@PathVariable Long id, @RequestBody TeamParticipant teamParticipantDetails) {
        Optional<TeamParticipant> optionalTeamParticipant = teamParticipantRepository.findById(id);

        if (optionalTeamParticipant.isPresent()) {
            TeamParticipant teamParticipant = optionalTeamParticipant.get();

            if (teamParticipantDetails.getEvent() != null) {
                teamParticipant.setEvent(teamParticipantDetails.getEvent());
            }
            if (teamParticipantDetails.getTeam() != null) {
                teamParticipant.setTeam(teamParticipantDetails.getTeam());
            }
            if (teamParticipantDetails.getRegistrationDate() != null) {
                teamParticipant.setRegistrationDate(teamParticipantDetails.getRegistrationDate());
            }

            TeamParticipant updatedTeamParticipant = teamParticipantRepository.save(teamParticipant);
            return new ResponseEntity<>(updatedTeamParticipant, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeamParticipant(@PathVariable Long id) {
        Optional<TeamParticipant> teamParticipant = teamParticipantRepository.findById(id);
        if (teamParticipant.isPresent()) {
            teamParticipantRepository.delete(teamParticipant.get());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
