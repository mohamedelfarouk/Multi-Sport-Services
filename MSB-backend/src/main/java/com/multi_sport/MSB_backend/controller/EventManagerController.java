package com.multi_sport.MSB_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.multi_sport.MSB_backend.entity.EventManager;
import com.multi_sport.MSB_backend.repository.AthleteRepository;
import com.multi_sport.MSB_backend.repository.EventManagerRepository;
import com.multi_sport.MSB_backend.repository.FacilityManagerRepository;
import com.multi_sport.MSB_backend.repository.TrainerRepository;

@RestController
@RequestMapping("/api/event-managers")
public class EventManagerController {

@Autowired
    private EventManagerRepository eventManagerRepository;

    @Autowired
    private AthleteRepository athleteRepository;

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private FacilityManagerRepository facilityManagerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody EventManager eventManager) {
        boolean emailExists = athleteRepository.findByEmail(eventManager.getEmail()).isPresent() ||
                              trainerRepository.findByEmail(eventManager.getEmail()).isPresent() ||
                              eventManagerRepository.findByEmail(eventManager.getEmail()).isPresent() ||
                              facilityManagerRepository.findByEmail(eventManager.getEmail()).isPresent();

        boolean usernameExists = athleteRepository.findByUsername(eventManager.getUsername()).isPresent() ||
                                 trainerRepository.findByUsername(eventManager.getUsername()).isPresent() ||
                                 eventManagerRepository.findByUsername(eventManager.getUsername()).isPresent() ||
                                 facilityManagerRepository.findByUsername(eventManager.getUsername()).isPresent();

        if (emailExists) {
            return new ResponseEntity<>("Email is already in use.", HttpStatus.CONFLICT);
        }

        if (usernameExists) {
            return new ResponseEntity<>("Username is already in use.", HttpStatus.CONFLICT);
        }

        // Hash the password before saving
        eventManager.setPassword(passwordEncoder.encode(eventManager.getPassword()));

        try {
            eventManagerRepository.save(eventManager);
            return new ResponseEntity<>("Signup successful", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<EventManager> getAllEventManagers() {
        return eventManagerRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventManager> getEventManagerById(@PathVariable Long id) {
        Optional<EventManager> eventManager = eventManagerRepository.findById(id);
        return eventManager.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                           .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEventManager(@PathVariable Long id, @RequestBody EventManager eventManagerDetails) {
        Optional<EventManager> optionalEventManager = eventManagerRepository.findById(id);
    
        if (optionalEventManager.isPresent()) {
            EventManager eventManager = optionalEventManager.get();
    
            // Check if the email is being updated and if it's already in use
            if (eventManagerDetails.getEmail() != null && !eventManager.getEmail().equals(eventManagerDetails.getEmail())) {
                boolean emailExists = athleteRepository.findByEmail(eventManagerDetails.getEmail()).isPresent() ||
                                      trainerRepository.findByEmail(eventManagerDetails.getEmail()).isPresent() ||
                                      eventManagerRepository.findByEmail(eventManagerDetails.getEmail()).isPresent() ||
                                      facilityManagerRepository.findByEmail(eventManagerDetails.getEmail()).isPresent();
    
                if (emailExists) {
                    return new ResponseEntity<>("Email is already in use.", HttpStatus.CONFLICT);
                } else {
                    eventManager.setEmail(eventManagerDetails.getEmail());
                }
            }
    
            // Check if the username is being updated and if it's already in use
            if (eventManagerDetails.getUsername() != null && !eventManager.getUsername().equals(eventManagerDetails.getUsername())) {
                boolean usernameExists = athleteRepository.findByUsername(eventManagerDetails.getUsername()).isPresent() ||
                                         trainerRepository.findByUsername(eventManagerDetails.getUsername()).isPresent() ||
                                         eventManagerRepository.findByUsername(eventManagerDetails.getUsername()).isPresent() ||
                                         facilityManagerRepository.findByUsername(eventManagerDetails.getUsername()).isPresent();
    
                if (usernameExists) {
                    return new ResponseEntity<>("Username is already in use.", HttpStatus.CONFLICT);
                } else {
                    eventManager.setUsername(eventManagerDetails.getUsername());
                }
            }
    
            // Update other fields as necessary
            if (eventManagerDetails.getFirstName() != null) {
                eventManager.setFirstName(eventManagerDetails.getFirstName());
            }
            if (eventManagerDetails.getLastName() != null) {
                eventManager.setLastName(eventManagerDetails.getLastName());
            }
    
            EventManager updatedEventManager = eventManagerRepository.save(eventManager);
            return new ResponseEntity<>(updatedEventManager, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Event Manager not found", HttpStatus.NOT_FOUND);
        }
    }
    
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEventManager(@PathVariable Long id) {
        Optional<EventManager> eventManager = eventManagerRepository.findById(id);
    
        if (eventManager.isPresent()) {
            eventManagerRepository.delete(eventManager.get());
            return new ResponseEntity<>("Event Manager deleted successfully.", HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Event Manager not found.", HttpStatus.NOT_FOUND);
        }
    }
    

    @GetMapping("/id")
    public ResponseEntity<Long> getEventManagerId(
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String phoneNumber) {
        
        Optional<EventManager> eventManager = Optional.empty();

        if (email != null) {
            eventManager = eventManagerRepository.findByEmail(email);
        } else if (username != null) {
            eventManager = eventManagerRepository.findByUsername(username);
        }// else if (phoneNumber != null) {
        //    eventManager = eventManagerRepository.findByPhoneNumber(phoneNumber);
        //}

        return eventManager.map(value -> new ResponseEntity<>(value.getUserId(), HttpStatus.OK))
                           .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
