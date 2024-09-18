package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.Facility;
import com.multi_sport.MSB_backend.repository.FacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/facilities")
public class FacilityController {

    @Autowired
    private FacilityRepository facilityRepository;

    @PostMapping("/create")
    public ResponseEntity<Facility> createFacility(@RequestBody Facility facility) {
        try {
            Facility createdFacility = facilityRepository.save(facility);
            return new ResponseEntity<>(createdFacility, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<Facility> getAllFacilities() {
        return facilityRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Facility> getFacilityById(@PathVariable Long id) {
        Optional<Facility> facility = facilityRepository.findById(id);
        return facility.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                       .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/search")
    public List<Facility> searchFacilities(@RequestParam("query") String query) {
        return facilityRepository.searchFacilitiesByNameOrAddress(query);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Facility> updateFacility(@PathVariable Long id, @RequestBody Facility facilityDetails) {
        Optional<Facility> optionalFacility = facilityRepository.findById(id);

        if (optionalFacility.isPresent()) {
            Facility facility = optionalFacility.get();
            
            if (facilityDetails.getFacilityName() != null) {
                facility.setFacilityName(facilityDetails.getFacilityName());
            }
            if (facilityDetails.getFacilityType() != null) {
                facility.setFacilityType(facilityDetails.getFacilityType());
            }
            if (facilityDetails.getAddress() != null) {
                facility.setAddress(facilityDetails.getAddress());
            }
            if (facilityDetails.getLocation() != null) {
                facility.setLocation(facilityDetails.getLocation());
            }
            if (facilityDetails.getPhoneNumber() != null) {
                facility.setPhoneNumber(facilityDetails.getPhoneNumber());
            }
            if (facilityDetails.getEmail() != null) {
                facility.setEmail(facilityDetails.getEmail());
            }
            if (facilityDetails.getRatings() != null) {
                facility.setRatings(facilityDetails.getRatings());
            }
            if (facilityDetails.getAmenities() != null) {
                facility.setAmenities(facilityDetails.getAmenities());
            }
            if (facilityDetails.getFacilityManager() != null) {
                facility.setFacilityManager(facilityDetails.getFacilityManager());
            }

            Facility updatedFacility = facilityRepository.save(facility);
            return new ResponseEntity<>(updatedFacility, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFacility(@PathVariable Long id) {
        Optional<Facility> facility = facilityRepository.findById(id);

        if (facility.isPresent()) {
            facilityRepository.delete(facility.get());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
