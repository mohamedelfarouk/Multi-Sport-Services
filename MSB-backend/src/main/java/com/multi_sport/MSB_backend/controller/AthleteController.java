package com.multi_sport.MSB_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.multi_sport.MSB_backend.entity.Athlete;
import com.multi_sport.MSB_backend.repository.AthleteRepository;
import com.multi_sport.MSB_backend.repository.EventManagerRepository;
import com.multi_sport.MSB_backend.repository.FacilityManagerRepository;
import com.multi_sport.MSB_backend.repository.TrainerRepository;

import org.springframework.security.crypto.password.PasswordEncoder;


@RestController
@RequestMapping("/api/athletes")
public class AthleteController {

    @Autowired
    private AthleteRepository athleteRepository;

    @Autowired
    private EventManagerRepository eventManagerRepository;

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private FacilityManagerRepository facilityManagerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody Athlete athlete) {
        boolean emailExists = athleteRepository.findByEmail(athlete.getEmail()).isPresent() ||
                              trainerRepository.findByEmail(athlete.getEmail()).isPresent() ||
                              eventManagerRepository.findByEmail(athlete.getEmail()).isPresent() ||
                              facilityManagerRepository.findByEmail(athlete.getEmail()).isPresent();

        boolean usernameExists = athleteRepository.findByUsername(athlete.getUsername()).isPresent() ||
                                 trainerRepository.findByUsername(athlete.getUsername()).isPresent() ||
                                 eventManagerRepository.findByUsername(athlete.getUsername()).isPresent() ||
                                 facilityManagerRepository.findByUsername(athlete.getUsername()).isPresent();

        if (emailExists) {
            return new ResponseEntity<>("Email is already in use.", HttpStatus.CONFLICT);
        }

        if (usernameExists) {
            return new ResponseEntity<>("Username is already in use.", HttpStatus.CONFLICT);
        }

        // Hash the password before saving
        athlete.setPassword(passwordEncoder.encode(athlete.getPassword()));

        try {
            athleteRepository.save(athlete);
            return new ResponseEntity<>("Signup successful", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
    

    @GetMapping
    public List<Athlete> getAllAthletes() {
        return athleteRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Athlete> getAthleteById(@PathVariable Long id) {
        Optional<Athlete> athlete = athleteRepository.findById(id);
        return athlete.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                      .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAthlete(@PathVariable Long id, @RequestBody Athlete athleteDetails) {
        Optional<Athlete> optionalAthlete = athleteRepository.findById(id);
    
        if (optionalAthlete.isPresent()) {
            Athlete athlete = optionalAthlete.get();
    
            // Check if the email is being updated and if it's already in use
            if (athleteDetails.getEmail() != null && !athlete.getEmail().equals(athleteDetails.getEmail())) {
                boolean emailExists = athleteRepository.findByEmail(athleteDetails.getEmail()).isPresent() ||
                                      trainerRepository.findByEmail(athleteDetails.getEmail()).isPresent() ||
                                      eventManagerRepository.findByEmail(athleteDetails.getEmail()).isPresent() ||
                                      facilityManagerRepository.findByEmail(athleteDetails.getEmail()).isPresent();
    
                if (emailExists) {
                    return new ResponseEntity<>("Email is already in use.", HttpStatus.CONFLICT);
                } else {
                    athlete.setEmail(athleteDetails.getEmail());
                }
            }
    
            // Check if the username is being updated and if it's already in use
            if (athleteDetails.getUsername() != null && !athlete.getUsername().equals(athleteDetails.getUsername())) {
                boolean usernameExists = athleteRepository.findByUsername(athleteDetails.getUsername()).isPresent() ||
                                         trainerRepository.findByUsername(athleteDetails.getUsername()).isPresent() ||
                                         eventManagerRepository.findByUsername(athleteDetails.getUsername()).isPresent() ||
                                         facilityManagerRepository.findByUsername(athleteDetails.getUsername()).isPresent();
    
                if (usernameExists) {
                    return new ResponseEntity<>("Username is already in use.", HttpStatus.CONFLICT);
                } else {
                    athlete.setUsername(athleteDetails.getUsername());
                }
            }
    
            // Update other fields as necessary
            if (athleteDetails.getFirstName() != null) {
                athlete.setFirstName(athleteDetails.getFirstName());
            }
            if (athleteDetails.getLastName() != null) {
                athlete.setLastName(athleteDetails.getLastName());
            }
            if (athleteDetails.getSports() != null) {
                athlete.setSports(athleteDetails.getSports());
            }
    
            Athlete updatedAthlete = athleteRepository.save(athlete);
            return new ResponseEntity<>(updatedAthlete, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Athlete not found", HttpStatus.NOT_FOUND);
        }
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAthlete(@PathVariable Long id) {
        Optional<Athlete> athlete = athleteRepository.findById(id);

        if (athlete.isPresent()) {
            athleteRepository.delete(athlete.get());
            return new ResponseEntity<>("Athlete deleted successfully.", HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Athlete not found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/id")
    public ResponseEntity<Long> getAthleteId(
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String phoneNumber) {
        
        Optional<Athlete> athlete = Optional.empty();

        if (email != null) {
            athlete = athleteRepository.findByEmail(email);
        } else if (username != null) {
            athlete = athleteRepository.findByUsername(username);
        }// else if (phoneNumber != null) {
        //    athlete = athleteRepository.findByPhoneNumber(phoneNumber);
        //}

        return athlete.map(value -> new ResponseEntity<>(value.getUserId(), HttpStatus.OK))
                      .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
