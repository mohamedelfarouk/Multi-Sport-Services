package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import entity.Facility;

@Repository
public interface FacilityRepository extends JpaRepository<Facility, Long> {
}
