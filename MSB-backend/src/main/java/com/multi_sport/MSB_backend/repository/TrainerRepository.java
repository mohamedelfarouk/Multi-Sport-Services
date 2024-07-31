package com.multi_sport.MSB_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multi_sport.MSB_backend.entity.Trainer;

@Repository

public interface TrainerRepository extends JpaRepository<Trainer, Long> {
    Optional<Trainer> findByEmail(String email);
    Optional<Trainer> findByUsername(String username);
    //Optional<Trainer> findByPhoneNumber(String phoneNumber);
}
