package com.multi_sport.MSB_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.multi_sport.MSB_backend.entity.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByAthlete_UserId(Long athleteId);
    List<Booking> findByTrainer_UserId(Long trainerId);
    List<Booking> findByFacility_FacilityId(Long facilityId);
}
