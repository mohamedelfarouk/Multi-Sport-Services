package com.example.multi_sport;

 
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.time.LocalDateTime;

@Entity
public class TrainingSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sessionId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String sessionType;
    private double cost;

    @ManyToOne
    @JoinColumn(name = "trainer_id")
    private User trainer;

    @ManyToOne
    @JoinColumn(name = "athlete_id")
    private User athlete;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private TrainingPackage trainingPackage;

    
    public Long getSessionId() {
        return sessionId;
    }
    public void setSessionId(Long sessionId) {
        this.sessionId = sessionId;
    }
    public LocalDateTime getStartTime() {
        return startTime;
    }
    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }
    public LocalDateTime getEndTime() {
        return endTime;
    }
    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }
    public String getSessionType() {
        return sessionType;
    }
    public void setSessionType(String sessionType) {
        this.sessionType = sessionType;
    }
    public double getCost() {
        return cost;
    }
    public void setCost(double cost) {
        this.cost = cost;
    }
 

    
 }

