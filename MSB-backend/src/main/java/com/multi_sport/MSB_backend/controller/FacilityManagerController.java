package com.multi_sport.MSB_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.multi_sport.MSB_backend.entity.FacilityManager;
import com.multi_sport.MSB_backend.repository.AthleteRepository;
import com.multi_sport.MSB_backend.repository.EventManagerRepository;
import com.multi_sport.MSB_backend.repository.FacilityManagerRepository;
import com.multi_sport.MSB_backend.repository.TrainerRepository;

@RestController
@RequestMapping("/api/facility-managers")
public class FacilityManagerController {

    @Autowired
    private FacilityManagerRepository facilityManagerRepository;

    @Autowired
    private AthleteRepository athleteRepository;

    @Autowired
    private EventManagerRepository eventManagerRepository;

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody FacilityManager facilityManager) {
        boolean emailExists = athleteRepository.findByEmail(facilityManager.getEmail()).isPresent() ||
                              trainerRepository.findByEmail(facilityManager.getEmail()).isPresent() ||
                              eventManagerRepository.findByEmail(facilityManager.getEmail()).isPresent() ||
                              facilityManagerRepository.findByEmail(facilityManager.getEmail()).isPresent();

        boolean usernameExists = athleteRepository.findByUsername(facilityManager.getUsername()).isPresent() ||
                                 trainerRepository.findByUsername(facilityManager.getUsername()).isPresent() ||
                                 eventManagerRepository.findByUsername(facilityManager.getUsername()).isPresent() ||
                                 facilityManagerRepository.findByUsername(facilityManager.getUsername()).isPresent();

        if (emailExists) {
            return new ResponseEntity<>("Email is already in use.", HttpStatus.CONFLICT);
        }

        if (usernameExists) {
            return new ResponseEntity<>("Username is already in use.", HttpStatus.CONFLICT);
        }

        // Hash the password before saving
        facilityManager.setPassword(passwordEncoder.encode(facilityManager.getPassword()));

        try {
            facilityManagerRepository.save(facilityManager);
            return new ResponseEntity<>("Signup successful", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<FacilityManager> getAllFacilityManagers() {
        return facilityManagerRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FacilityManager> getFacilityManagerById(@PathVariable Long id) {
        Optional<FacilityManager> facilityManager = facilityManagerRepository.findById(id);
        return facilityManager.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                              .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFacilityManager(@PathVariable Long id, @RequestBody FacilityManager facilityManagerDetails) {
        Optional<FacilityManager> optionalFacilityManager = facilityManagerRepository.findById(id);
    
        if (optionalFacilityManager.isPresent()) {
            FacilityManager facilityManager = optionalFacilityManager.get();
    
            // Check if the email is being updated and if it's already in use
            if (facilityManagerDetails.getEmail() != null && !facilityManager.getEmail().equals(facilityManagerDetails.getEmail())) {
                boolean emailExists = athleteRepository.findByEmail(facilityManagerDetails.getEmail()).isPresent() ||
                                      trainerRepository.findByEmail(facilityManagerDetails.getEmail()).isPresent() ||
                                      eventManagerRepository.findByEmail(facilityManagerDetails.getEmail()).isPresent() ||
                                      facilityManagerRepository.findByEmail(facilityManagerDetails.getEmail()).isPresent();
    
                if (emailExists) {
                    return new ResponseEntity<>("Email is already in use.", HttpStatus.CONFLICT);
                } else {
                    facilityManager.setEmail(facilityManagerDetails.getEmail());
                }
            }
    
            // Check if the username is being updated and if it's already in use
            if (facilityManagerDetails.getUsername() != null && !facilityManager.getUsername().equals(facilityManagerDetails.getUsername())) {
                boolean usernameExists = athleteRepository.findByUsername(facilityManagerDetails.getUsername()).isPresent() ||
                                         trainerRepository.findByUsername(facilityManagerDetails.getUsername()).isPresent() ||
                                         eventManagerRepository.findByUsername(facilityManagerDetails.getUsername()).isPresent() ||
                                         facilityManagerRepository.findByUsername(facilityManagerDetails.getUsername()).isPresent();
    
                if (usernameExists) {
                    return new ResponseEntity<>("Username is already in use.", HttpStatus.CONFLICT);
                } else {
                    facilityManager.setUsername(facilityManagerDetails.getUsername());
                }
            }
    
            // Update other fields as necessary
            if (facilityManagerDetails.getFirstName() != null) {
                facilityManager.setFirstName(facilityManagerDetails.getFirstName());
            }
            if (facilityManagerDetails.getLastName() != null) {
                facilityManager.setLastName(facilityManagerDetails.getLastName());
            }
            // Add checks for any other fields that may need to be updated
    
            FacilityManager updatedFacilityManager = facilityManagerRepository.save(facilityManager);
            return new ResponseEntity<>(updatedFacilityManager, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Facility Manager not found", HttpStatus.NOT_FOUND);
        }
    }
    
    

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFacilityManager(@PathVariable Long id) {
        Optional<FacilityManager> facilityManager = facilityManagerRepository.findById(id);
    
        if (facilityManager.isPresent()) {
            facilityManagerRepository.delete(facilityManager.get());
            return new ResponseEntity<>("Facility Manager deleted successfully.", HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Facility Manager not found.", HttpStatus.NOT_FOUND);
        }
    }
    

    @GetMapping("/id")
    public ResponseEntity<Long> getFacilityManagerId(
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String phoneNumber) {
        
        Optional<FacilityManager> facilityManager = Optional.empty();

        if (email != null) {
            facilityManager = facilityManagerRepository.findByEmail(email);
        } else if (username != null) {
            facilityManager = facilityManagerRepository.findByUsername(username);
        }// else if (phoneNumber != null) {
        //    facilityManager = facilityManagerRepository.findByPhoneNumber(phoneNumber);
        //}

        return facilityManager.map(value -> new ResponseEntity<>(value.getUserId(), HttpStatus.OK))
                              .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
