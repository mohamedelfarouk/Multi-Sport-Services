package com.multi_sport.MSB_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multi_sport.MSB_backend.entity.FacilityManager;

@Repository

public interface FacilityManagerRepository extends JpaRepository<FacilityManager, Long> {
    Optional<FacilityManager> findByEmail(String email);
    Optional<FacilityManager> findByUsername(String username);
    //Optional<FacilityManager> findByPhoneNumber(String phoneNumber);
}
