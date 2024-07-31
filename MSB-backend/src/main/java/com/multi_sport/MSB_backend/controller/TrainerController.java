package com.multi_sport.MSB_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

import com.multi_sport.MSB_backend.entity.Trainer;
import com.multi_sport.MSB_backend.repository.AthleteRepository;
import com.multi_sport.MSB_backend.repository.EventManagerRepository;
import com.multi_sport.MSB_backend.repository.FacilityManagerRepository;
import com.multi_sport.MSB_backend.repository.TrainerRepository;

@RestController
@RequestMapping("/api/trainers")
public class TrainerController {

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private AthleteRepository athleteRepository;

    @Autowired
    private EventManagerRepository eventManagerRepository;

    @Autowired
    private FacilityManagerRepository facilityManagerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody Trainer trainer) {
        boolean emailExists = athleteRepository.findByEmail(trainer.getEmail()).isPresent() ||
                              trainerRepository.findByEmail(trainer.getEmail()).isPresent() ||
                              eventManagerRepository.findByEmail(trainer.getEmail()).isPresent() ||
                              facilityManagerRepository.findByEmail(trainer.getEmail()).isPresent();

        boolean usernameExists = athleteRepository.findByUsername(trainer.getUsername()).isPresent() ||
                                 trainerRepository.findByUsername(trainer.getUsername()).isPresent() ||
                                 eventManagerRepository.findByUsername(trainer.getUsername()).isPresent() ||
                                 facilityManagerRepository.findByUsername(trainer.getUsername()).isPresent();

        if (emailExists) {
            return new ResponseEntity<>("Email is already in use.", HttpStatus.CONFLICT);
        }

        if (usernameExists) {
            return new ResponseEntity<>("Username is already in use.", HttpStatus.CONFLICT);
        }

        // Hash the password before saving
        trainer.setPassword(passwordEncoder.encode(trainer.getPassword()));

        try {
            trainerRepository.save(trainer);
            return new ResponseEntity<>("Signup successful", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<Trainer> getAllTrainers() {
        return trainerRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trainer> getTrainerById(@PathVariable Long id) {
        Optional<Trainer> trainer = trainerRepository.findById(id);
        return trainer.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                      .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<?> updateTrainer(@PathVariable Long id, @RequestBody Trainer trainerDetails) {
        Optional<Trainer> optionalTrainer = trainerRepository.findById(id);

        if (optionalTrainer.isPresent()) {
            Trainer trainer = optionalTrainer.get();

            // Check if the email is being updated and if it's already in use
            if (trainerDetails.getEmail() != null && !trainer.getEmail().equals(trainerDetails.getEmail())) {
                boolean emailExists = athleteRepository.findByEmail(trainerDetails.getEmail()).isPresent() ||
                                      trainerRepository.findByEmail(trainerDetails.getEmail()).isPresent() ||
                                      eventManagerRepository.findByEmail(trainerDetails.getEmail()).isPresent() ||
                                      facilityManagerRepository.findByEmail(trainerDetails.getEmail()).isPresent();

                if (emailExists) {
                    return new ResponseEntity<>("Email is already in use.", HttpStatus.CONFLICT);
                }
            }

            // Check if the username is being updated and if it's already in use
            if (trainerDetails.getUsername() != null && !trainer.getUsername().equals(trainerDetails.getUsername())) {
                boolean usernameExists = athleteRepository.findByUsername(trainerDetails.getUsername()).isPresent() ||
                                         trainerRepository.findByUsername(trainerDetails.getUsername()).isPresent() ||
                                         eventManagerRepository.findByUsername(trainerDetails.getUsername()).isPresent() ||
                                         facilityManagerRepository.findByUsername(trainerDetails.getUsername()).isPresent();

                if (usernameExists) {
                    return new ResponseEntity<>("Username is already in use.", HttpStatus.CONFLICT);
                }
            }

            // Update fields as necessary
            if (trainerDetails.getFirstName() != null) {
                trainer.setFirstName(trainerDetails.getFirstName());
            }
            if (trainerDetails.getLastName() != null) {
                trainer.setLastName(trainerDetails.getLastName());
            }
            if (trainerDetails.getEmail() != null) {
                trainer.setEmail(trainerDetails.getEmail());
            }
            if (trainerDetails.getUsername() != null) {
                trainer.setUsername(trainerDetails.getUsername());
            }
            if (trainerDetails.getPackages() != null) {
                trainer.setPackages(trainerDetails.getPackages());
            }

            Trainer updatedTrainer = trainerRepository.save(trainer);
            return new ResponseEntity<>(updatedTrainer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Trainer not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTrainer(@PathVariable Long id) {
        Optional<Trainer> trainer = trainerRepository.findById(id);

        if (trainer.isPresent()) {
            trainerRepository.delete(trainer.get());
            return new ResponseEntity<>("Trainer deleted successfully.", HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Trainer not found.", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/id")
    public ResponseEntity<Long> getTrainerId(
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String phoneNumber) {

        Optional<Trainer> trainer = Optional.empty();

        if (email != null) {
            trainer = trainerRepository.findByEmail(email);
        } else if (username != null) {
            trainer = trainerRepository.findByUsername(username);
        } // else if (phoneNumber != null) {
        // trainer = trainerRepository.findByPhoneNumber(phoneNumber);
        // }

        return trainer.map(value -> new ResponseEntity<>(value.getUserId(), HttpStatus.OK))
                      .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
