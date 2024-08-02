package com.multi_sport.MSB_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multi_sport.MSB_backend.entity.EventManager;

@Repository

public interface EventManagerRepository extends JpaRepository<EventManager, Long> {
    Optional<EventManager> findByEmail(String email);
    Optional<EventManager> findByUsername(String username);
    //Optional<EventManager> findByPhoneNumber(String phoneNumber);
}
