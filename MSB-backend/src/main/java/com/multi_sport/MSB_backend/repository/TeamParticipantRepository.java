package com.multi_sport.MSB_backend.repository;

import com.multi_sport.MSB_backend.entity.TeamParticipant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamParticipantRepository extends JpaRepository<TeamParticipant, Long> {
    List<TeamParticipant> findByEvent_EventId(Long eventId);
    List<TeamParticipant> findByTeam_TeamId(Long teamId);
}
