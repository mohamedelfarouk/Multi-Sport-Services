package com.multi_sport.MSB_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.multi_sport.MSB_backend.entity.Athlete;
import com.multi_sport.MSB_backend.entity.EventManager;
import com.multi_sport.MSB_backend.entity.FacilityManager;
import com.multi_sport.MSB_backend.entity.Trainer;
import com.multi_sport.MSB_backend.entity.User;
import com.multi_sport.MSB_backend.repository.AthleteRepository;
import com.multi_sport.MSB_backend.repository.EventManagerRepository;
import com.multi_sport.MSB_backend.repository.FacilityManagerRepository;
import com.multi_sport.MSB_backend.repository.TrainerRepository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private AthleteRepository athleteRepository;

    @Autowired
    private EventManagerRepository eventManagerRepository;

    @Autowired
    private FacilityManagerRepository facilityManagerRepository;

    @Autowired
    private TrainerRepository trainerRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> loginData) {
        String identifier = loginData.get("identifier");
        String password = loginData.get("password");

        Optional<? extends User> userOptional = findUserByIdentifier(identifier);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                // Password is correct, build response JSON
                Map<String, Object> response = new HashMap<>();
                response.put("userId", user.getUserId()); // Assuming user has a getId() method
                if (user instanceof Athlete) {
                    response.put("role", "Athlete");
                } else if (user instanceof EventManager) {
                    response.put("role", "Event Manager");
                } else if (user instanceof FacilityManager) {
                    response.put("role", "Facility Manager");
                } else if (user instanceof Trainer) {
                    response.put("role", "Trainer");
                } else {
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }

                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                // Password is incorrect
                return new ResponseEntity<>(Map.of("error", "Incorrect password"), HttpStatus.UNAUTHORIZED);
            }
        } else {
            // User not found
            return new ResponseEntity<>(Map.of("error", "User not found"), HttpStatus.NOT_FOUND);
        }
    }

    private Optional<? extends User> findUserByIdentifier(String identifier) {
        Optional<Athlete> athlete = athleteRepository.findByEmail(identifier);
        if (athlete.isPresent()) return athlete;

        athlete = athleteRepository.findByUsername(identifier);
        if (athlete.isPresent()) return athlete;

        Optional<EventManager> eventManager = eventManagerRepository.findByEmail(identifier);
        if (eventManager.isPresent()) return eventManager;

        eventManager = eventManagerRepository.findByUsername(identifier);
        if (eventManager.isPresent()) return eventManager;

        Optional<FacilityManager> facilityManager = facilityManagerRepository.findByEmail(identifier);
        if (facilityManager.isPresent()) return facilityManager;

        facilityManager = facilityManagerRepository.findByUsername(identifier);
        if (facilityManager.isPresent()) return facilityManager;

        Optional<Trainer> trainer = trainerRepository.findByEmail(identifier);
        if (trainer.isPresent()) return trainer;

        trainer = trainerRepository.findByUsername(identifier);
        return trainer;
    }
}
