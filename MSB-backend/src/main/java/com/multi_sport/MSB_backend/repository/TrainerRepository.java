package com.multi_sport.MSB_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multi_sport.MSB_backend.entity.Trainer;

@Repository

public interface TrainerRepository extends JpaRepository<Trainer, Long> {

}
