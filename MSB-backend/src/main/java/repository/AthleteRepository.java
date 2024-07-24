package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.Athlete;

@Repository
public interface AthleteRepository extends JpaRepository<Athlete, Long> {

}
