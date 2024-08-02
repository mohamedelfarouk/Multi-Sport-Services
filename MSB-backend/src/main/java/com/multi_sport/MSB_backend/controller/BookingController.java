package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.Booking;
import com.multi_sport.MSB_backend.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping("/new")
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        try {
            Booking savedBooking = bookingRepository.save(booking);
            return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        return booking.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                      .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateBooking(@PathVariable Long id, @RequestBody Booking bookingDetails) {
        Optional<Booking> optionalBooking = bookingRepository.findById(id);
    
        if (optionalBooking.isPresent()) {
            Booking booking = optionalBooking.get();
            
            if (bookingDetails.getAthlete() != null) {
                booking.setAthlete(bookingDetails.getAthlete());
            }
            if (bookingDetails.getTrainer() != null) {
                booking.setTrainer(bookingDetails.getTrainer());
            }
            if (bookingDetails.getFacility() != null) {
                booking.setFacility(bookingDetails.getFacility());
            }
            if (bookingDetails.getStartTime() != null) {
                booking.setStartTime(bookingDetails.getStartTime());
            }
            if (bookingDetails.getEndTime() != null) {
                booking.setEndTime(bookingDetails.getEndTime());
            }
            if (bookingDetails.getTotalCost() != null) {
                booking.setTotalCost(bookingDetails.getTotalCost());
            }
            if (bookingDetails.getPaymentStatus() != null) {
                booking.setPaymentStatus(bookingDetails.getPaymentStatus());
            }
            if (bookingDetails.getIsSession() != null) {
                booking.setIsSession(bookingDetails.getIsSession());
            }
    
            Booking updatedBooking = bookingRepository.save(booking);
            return new ResponseEntity<>(updatedBooking, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Booking not found", HttpStatus.NOT_FOUND);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBooking(@PathVariable Long id) {
        Optional<Booking> booking = bookingRepository.findById(id);

        if (booking.isPresent()) {
            bookingRepository.delete(booking.get());
            return new ResponseEntity<>("Booking deleted successfully.", HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Booking not found.", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/byAthlete/{athleteId}")
    public ResponseEntity<List<Booking>> getBookingsByAthlete(@PathVariable Long athleteId) {
        List<Booking> bookings = bookingRepository.findByAthlete_UserId(athleteId);
        if (bookings.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/byTrainer/{trainerId}")
    public ResponseEntity<List<Booking>> getBookingsByTrainer(@PathVariable Long trainerId) {
        List<Booking> bookings = bookingRepository.findByTrainer_UserId(trainerId);
        if (bookings.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/byFacility/{facilityId}")
    public ResponseEntity<List<Booking>> getBookingsByFacility(@PathVariable Long facilityId) {
        List<Booking> bookings = bookingRepository.findByFacility_FacilityId(facilityId);
        if (bookings.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }
}
