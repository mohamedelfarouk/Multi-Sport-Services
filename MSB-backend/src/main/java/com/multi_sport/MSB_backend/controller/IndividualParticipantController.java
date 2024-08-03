package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.IndividualParticipant;
import com.multi_sport.MSB_backend.repository.IndividualParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/individual-participants")
public class IndividualParticipantController {

    @Autowired
    private IndividualParticipantRepository individualParticipantRepository;

    @PostMapping("/create")
    public ResponseEntity<IndividualParticipant> createParticipant(@RequestBody IndividualParticipant participant) {
        try {
            IndividualParticipant createdParticipant = individualParticipantRepository.save(participant);
            return new ResponseEntity<>(createdParticipant, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<IndividualParticipant> getAllParticipants() {
        return individualParticipantRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<IndividualParticipant> getParticipantById(@PathVariable Long id) {
        Optional<IndividualParticipant> participant = individualParticipantRepository.findById(id);
        return participant.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                          .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<IndividualParticipant> updateParticipant(@PathVariable Long id, @RequestBody IndividualParticipant participantDetails) {
        Optional<IndividualParticipant> optionalParticipant = individualParticipantRepository.findById(id);

        if (optionalParticipant.isPresent()) {
            IndividualParticipant participant = optionalParticipant.get();

            if (participantDetails.getEvent() != null) {
                participant.setEvent(participantDetails.getEvent());
            }
            if (participantDetails.getAthlete() != null) {
                participant.setAthlete(participantDetails.getAthlete());
            }
            if (participantDetails.getRegistrationDate() != null) {
                participant.setRegistrationDate(participantDetails.getRegistrationDate());
            }

            IndividualParticipant updatedParticipant = individualParticipantRepository.save(participant);
            return new ResponseEntity<>(updatedParticipant, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteParticipant(@PathVariable Long id) {
        Optional<IndividualParticipant> participant = individualParticipantRepository.findById(id);
        if (participant.isPresent()) {
            individualParticipantRepository.delete(participant.get());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
