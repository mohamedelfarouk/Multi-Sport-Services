package com.multi_sport.MSB_backend.Services;

import com.multi_sport.MSB_backend.entity.*;
import com.multi_sport.MSB_backend.repository.TrainingSessionRepository;
import com.multi_sport.MSB_backend.repository.AthleteRepository;
import com.multi_sport.MSB_backend.repository.TrainerPackageRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TrainingSessionService {

    @Autowired
    private TrainingSessionRepository trainingSessionRepository;

    @Autowired
    private AthleteRepository athleteRepository;

    @Autowired
    private TrainerPackageRepository trainerPackageRepository;

   
    public List<TrainingSession> getUpcomingSessionsByTrainerId(Long trainerId) {
        return trainingSessionRepository.findUpcomingSessionsByTrainerId(trainerId, new Date());
    }

    public void setSessionPrice(Long sessionId, double price) {
        TrainingSession session = trainingSessionRepository.findById(sessionId)
            .orElseThrow(() -> new RuntimeException("Session not found"));
        session.setCost(price);
        trainingSessionRepository.save(session);
    }

    public double applyDiscount(Long sessionId, Long athleteId) {
        TrainingSession session = trainingSessionRepository.findById(sessionId)
            .orElseThrow(() -> new RuntimeException("Session not found"));
        Athlete athlete = athleteRepository.findById(athleteId)
            .orElseThrow(() -> new RuntimeException("Athlete not found"));
        if (!athlete.isHasPaidForSessions()) {
            return session.getCost() / 2;  
        }
        return session.getCost();
    }

    public double applyPackageDiscount(Long packageId, Long athleteId) {
        TrainerPackage trainerPackage = trainerPackageRepository.findById(packageId)
            .orElseThrow(() -> new RuntimeException("Package not found"));
        Athlete athlete = athleteRepository.findById(athleteId)
            .orElseThrow(() -> new RuntimeException("Athlete not found"));
        if (athlete.isLongTermClient()) {
            return trainerPackage.getPrice() * 0.9; // Apply 10% discount
        }
        return trainerPackage.getPrice();
    }
}
