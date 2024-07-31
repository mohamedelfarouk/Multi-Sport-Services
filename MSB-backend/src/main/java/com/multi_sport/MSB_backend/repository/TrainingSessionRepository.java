package com.multi_sport.MSB_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.multi_sport.MSB_backend.entity.TrainingSession;

import java.util.Date;
import java.util.List;

public interface TrainingSessionRepository extends JpaRepository<TrainingSession, Long> {

    @Query("SELECT ts FROM TrainingSession ts WHERE ts.trainer.userId = :trainerId AND ts.sessionDate > :currentDate")
    List<TrainingSession> findUpcomingSessionsByTrainerId(@Param("trainerId") Long trainerId, @Param("currentDate") Date currentDate);
}
