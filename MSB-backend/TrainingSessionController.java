package com.multi_sport.MSB_backend.Controllers;

import com.multi_sport.MSB_backend.entity.*;
import com.multi_sport.MSB_backend.Services.TrainingSessionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/training-sessions")
public class TrainingSessionController {

    @Autowired
    private TrainingSessionService trainingSessionService;

    @GetMapping("/upcoming/{trainerId}")
    public List<TrainingSession> getUpcomingSessionsByTrainerId(@PathVariable Long trainerId) {
        return trainingSessionService.getUpcomingSessionsByTrainerId(trainerId);
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
}
