package com.multi_sport.MSB_backend.repository;

import com.multi_sport.MSB_backend.entity.IndividualParticipant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IndividualParticipantRepository extends JpaRepository<IndividualParticipant, Long> {
    List<IndividualParticipant> findByEventId(Long eventId);
    List<IndividualParticipant> findByAthleteId(Long athleteId);
}
