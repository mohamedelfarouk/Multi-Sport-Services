package com.multi_sport.MSB_backend.repository;

import com.multi_sport.MSB_backend.entity.TrainerPackage;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainerPackageRepository extends JpaRepository<TrainerPackage, Long> {
 
    List<TrainerPackage> findByTrainerUserId(Long trainerId);
}
