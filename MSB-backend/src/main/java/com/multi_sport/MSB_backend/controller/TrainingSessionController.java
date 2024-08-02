package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.TrainingSession;
import com.multi_sport.MSB_backend.repository.TrainingSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/training-sessions")
public class TrainingSessionController {

    @Autowired
    private TrainingSessionRepository trainingSessionRepository;

    @PostMapping("/new")
    public ResponseEntity<TrainingSession> createTrainingSession(@RequestBody TrainingSession trainingSession) {
        try {
            TrainingSession savedSession = trainingSessionRepository.save(trainingSession);
            return new ResponseEntity<>(savedSession, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<TrainingSession> getAllTrainingSessions() {
        return trainingSessionRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrainingSession> getTrainingSessionById(@PathVariable Long id) {
        Optional<TrainingSession> trainingSession = trainingSessionRepository.findById(id);
        return trainingSession.map(session -> new ResponseEntity<>(session, HttpStatus.OK))
                              .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TrainingSession> updateTrainingSession(@PathVariable Long id, @RequestBody TrainingSession sessionDetails) {
        Optional<TrainingSession> optionalSession = trainingSessionRepository.findById(id);

        if (optionalSession.isPresent()) {
            TrainingSession trainingSession = optionalSession.get();

            if (sessionDetails.getCost() != null) {
                trainingSession.setCost(sessionDetails.getCost());
            }
            if (sessionDetails.getTrainer() != null) {
                trainingSession.setTrainer(sessionDetails.getTrainer());
            }
            if (sessionDetails.getAthlete() != null) {
                trainingSession.setAthlete(sessionDetails.getAthlete());
            }
            if (sessionDetails.getSessionType() != null) {
                trainingSession.setSessionType(sessionDetails.getSessionType());
            }
            if (sessionDetails.getStartTime() != null) {
                trainingSession.setStartTime(sessionDetails.getStartTime());
            }
            if (sessionDetails.getEndTime() != null) {
                trainingSession.setEndTime(sessionDetails.getEndTime());
            }
            if (sessionDetails.getSessionDate() != null) {
                trainingSession.setSessionDate(sessionDetails.getSessionDate());
            }

            TrainingSession updatedSession = trainingSessionRepository.save(trainingSession);
            return new ResponseEntity<>(updatedSession, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTrainingSession(@PathVariable Long id) {
        Optional<TrainingSession> trainingSession = trainingSessionRepository.findById(id);

        if (trainingSession.isPresent()) {
            trainingSessionRepository.delete(trainingSession.get());
            return new ResponseEntity<>("Training session deleted successfully.", HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Training session not found.", HttpStatus.NOT_FOUND);
        }
    }
}
