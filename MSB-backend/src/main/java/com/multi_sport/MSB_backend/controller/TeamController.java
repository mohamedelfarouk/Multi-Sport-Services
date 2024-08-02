package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.Team;
import com.multi_sport.MSB_backend.entity.TeamMember;
import com.multi_sport.MSB_backend.repository.TeamMemberRepository;
import com.multi_sport.MSB_backend.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/teams")
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;
    
    @Autowired
    private TeamMemberRepository teamMemberRepository;

    @PostMapping
    public ResponseEntity<?> createTeam(@RequestBody Team team) {
        try {
            Team savedTeam = teamRepository.save(team);
            return new ResponseEntity<>(savedTeam, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Could not create team.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Team> getTeamById(@PathVariable Long id) {
        Optional<Team> team = teamRepository.findById(id);
        return team.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                   .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTeam(@PathVariable Long id, @RequestBody Team teamDetails) {
        Optional<Team> optionalTeam = teamRepository.findById(id);
    
        if (optionalTeam.isPresent()) {
            Team team = optionalTeam.get();
            
            if (teamDetails.getName() != null) {
                team.setName(teamDetails.getName());
            }
            if (teamDetails.getSport() != null) {
                team.setSport(teamDetails.getSport());
            }
            if (teamDetails.getTeamMembers() != null) {
                team.setNumberOfMembers(teamDetails.getTeamMembers().size());
            }
    
            Team updatedTeam = teamRepository.save(team);
            return new ResponseEntity<>(updatedTeam, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Team not found", HttpStatus.NOT_FOUND);
        }
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTeam(@PathVariable Long id) {
        Optional<Team> team = teamRepository.findById(id);

        if (team.isPresent()) {
            teamRepository.delete(team.get());
            return new ResponseEntity<>("Team deleted successfully.", HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Team not found.", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{teamId}/members")
    public ResponseEntity<?> addTeamMember(@PathVariable Long teamId, @RequestBody TeamMember teamMember) {
        Optional<Team> teamOptional = teamRepository.findById(teamId);

        if (teamOptional.isPresent()) {
            Team team = teamOptional.get();
            teamMember.setTeam(team);
            teamMemberRepository.save(teamMember);
            return new ResponseEntity<>("Team member added successfully.", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Team not found.", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{teamId}/members/{memberId}")
    public ResponseEntity<?> removeTeamMember(@PathVariable Long teamId, @PathVariable Long memberId) {
        Optional<Team> teamOptional = teamRepository.findById(teamId);
        Optional<TeamMember> memberOptional = teamMemberRepository.findById(memberId);

        if (teamOptional.isPresent() && memberOptional.isPresent()) {
            Team team = teamOptional.get();
            TeamMember member = memberOptional.get();
            team.removeTeamMember(member);
            teamMemberRepository.delete(member);
            return new ResponseEntity<>("Team member removed successfully.", HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Team or member not found.", HttpStatus.NOT_FOUND);
        }
    }
}