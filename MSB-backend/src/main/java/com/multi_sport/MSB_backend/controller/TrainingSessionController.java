package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.*;
import com.multi_sport.MSB_backend.service.TrainingSessionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/training-sessions")
public class TrainingSessionController {

    @Autowired
    private TrainingSessionService trainingSessionService;

    @GetMapping("/trainer/{trainerId}")
    public List<TrainingSession> getUpcomingSessionsByTrainerId(@PathVariable Long trainerId) {
        try {
            return trainingSessionService.getUpcomingSessionsByTrainerId(trainerId);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    @PostMapping("/{sessionId}/price")
    public void setSessionPrice(@PathVariable Long sessionId, @RequestBody double price) {
        trainingSessionService.setSessionPrice(sessionId, price);
    }

    @GetMapping("/{sessionId}/discount/{athleteId}")
    public double getDiscountedPrice(@PathVariable Long sessionId, @PathVariable Long athleteId) {
        return trainingSessionService.applyDiscount(sessionId, athleteId);
    }

    @GetMapping("/package-discount/{packageId}/{athleteId}")
    public double getPackageDiscountedPrice(@PathVariable Long packageId, @PathVariable Long athleteId) {
        return trainingSessionService.applyPackageDiscount(packageId, athleteId);
    }

    @PostMapping
    public TrainingSession createSession(@RequestBody TrainingSession session) {
        return trainingSessionService.createSession(session);
    }

    @PutMapping("/{sessionId}")
    public TrainingSession updateSession(@PathVariable Long sessionId, @RequestBody TrainingSession sessionDetails) {
        return trainingSessionService.updateSession(sessionId, sessionDetails);
    }

    @DeleteMapping("/{sessionId}")
    public void deleteSession(@PathVariable Long sessionId) {
        trainingSessionService.deleteSession(sessionId);
    }
}

