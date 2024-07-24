package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import entity.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}

