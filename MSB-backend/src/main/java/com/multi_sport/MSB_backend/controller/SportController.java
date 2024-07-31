package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.Sport;
import com.multi_sport.MSB_backend.repository.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/sports")
public class SportController {

    @Autowired
    private SportRepository sportRepository;

    @PostMapping("/create")
    public ResponseEntity<String> createSport(@RequestBody Sport sport) {
        // Check if a sport with the same name already exists
        Optional<Sport> existingSport = sportRepository.findByName(sport.getName());
        if (existingSport.isPresent()) {
            return new ResponseEntity<>("Sport name already exists.", HttpStatus.CONFLICT);
        }

        try {
            sportRepository.save(sport);
            return new ResponseEntity<>("Sport created successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<Sport> getAllSports() {
        return sportRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sport> getSportById(@PathVariable Long id) {
        Optional<Sport> sport = sportRepository.findById(id);
        return sport.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateSport(@PathVariable Long id, @RequestBody Sport sportDetails) {
        Optional<Sport> optionalSport = sportRepository.findById(id);

        if (optionalSport.isPresent()) {
            Sport sport = optionalSport.get();

            if (sportDetails.getName() != null) {
                // Check if another sport with the same name exists
                Optional<Sport> existingSport = sportRepository.findByName(sportDetails.getName());
                if (existingSport.isPresent() && existingSport.get().getId() != id) {
                    return new ResponseEntity<>("Sport name already exists.", HttpStatus.CONFLICT);
                }
                sport.setName(sportDetails.getName());
            }
            if (sportDetails.getSportType() != null) {
                sport.setSportType(sportDetails.getSportType());
            }

            Sport updatedSport = sportRepository.save(sport);
            return new ResponseEntity<>(updatedSport, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSport(@PathVariable Long id) {
        Optional<Sport> sport = sportRepository.findById(id);

        if (sport.isPresent()) {
            sportRepository.delete(sport.get());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
