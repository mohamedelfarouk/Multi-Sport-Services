package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.TeamMember;
import com.multi_sport.MSB_backend.repository.TeamMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/team-members")
public class TeamMemberController {

    @Autowired
    private TeamMemberRepository teamMemberRepository;

    @PostMapping
    public ResponseEntity<?> createTeamMember(@RequestBody TeamMember teamMember) {
        try {
            TeamMember savedTeamMember = teamMemberRepository.save(teamMember);
            return new ResponseEntity<>(savedTeamMember, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Could not create team member.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<TeamMember> getAllTeamMembers() {
        return teamMemberRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamMember> getTeamMemberById(@PathVariable Long id) {
        Optional<TeamMember> teamMember = teamMemberRepository.findById(id);
        return teamMember.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                         .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTeamMember(@PathVariable Long id, @RequestBody TeamMember teamMemberDetails) {
        Optional<TeamMember> optionalTeamMember = teamMemberRepository.findById(id);
    
        if (optionalTeamMember.isPresent()) {
            TeamMember teamMember = optionalTeamMember.get();
            
            if (teamMemberDetails.getTeam() != null) {
                teamMember.setTeam(teamMemberDetails.getTeam());
            }
            if (teamMemberDetails.getUser() != null) {
                teamMember.setUser(teamMemberDetails.getUser());
            }
            teamMember.setCaptain(teamMemberDetails.isCaptain());
    
            TeamMember updatedTeamMember = teamMemberRepository.save(teamMember);
            return new ResponseEntity<>(updatedTeamMember, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Team member not found", HttpStatus.NOT_FOUND);
        }
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTeamMember(@PathVariable Long id) {
        Optional<TeamMember> teamMember = teamMemberRepository.findById(id);

        if (teamMember.isPresent()) {
            teamMemberRepository.delete(teamMember.get());
            return new ResponseEntity<>("Team member deleted successfully.", HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Team member not found.", HttpStatus.NOT_FOUND);
        }
    }
}