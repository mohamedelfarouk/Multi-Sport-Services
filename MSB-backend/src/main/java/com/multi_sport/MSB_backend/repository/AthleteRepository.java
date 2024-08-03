package com.multi_sport.MSB_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multi_sport.MSB_backend.entity.Athlete;

@Repository
public interface AthleteRepository extends JpaRepository<Athlete, Long> {
    Optional<Athlete> findByEmail(String email);
    Optional<Athlete> findByUsername(String username);
    //Optional<Athlete> findByPhoneNumber(String phoneNumber);
}
