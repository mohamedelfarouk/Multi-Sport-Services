package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.EventManager;

@Repository

public interface EventManagerRepository extends JpaRepository<EventManager, Long> {

}
