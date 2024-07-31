package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import entity.Participant;

@Repository
public interface ParticipantRepository extends JpaRepository<Participant, Long> {
}

