package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.FacilityManager;

@Repository

public interface FacilityManagerRepository extends JpaRepository<FacilityManager, Long> {

}
