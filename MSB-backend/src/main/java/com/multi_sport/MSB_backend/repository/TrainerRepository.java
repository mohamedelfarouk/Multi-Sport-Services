package com.multi_sport.MSB_backend.repository;

import java.util.List;
import java.util.Optional;

import com.multi_sport.MSB_backend.entity.Facility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.multi_sport.MSB_backend.entity.Trainer;

@Repository

public interface TrainerRepository extends JpaRepository<Trainer, Long> {
    Optional<Trainer> findByEmail(String email);
    Optional<Trainer> findByUsername(String username);
    //Optional<Trainer> findByPhoneNumber(String phoneNumber);
    @Query("SELECT f FROM Trainer f WHERE f.name LIKE %:query%")
    List<Trainer> searchTrainersByName(@Param("query") String query);
}
