package com.multi_sport.MSB_backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.multi_sport.MSB_backend.entity.Facility;
import com.multi_sport.MSB_backend.repository.FacilityRepository;

import jakarta.transaction.Transactional;

import java.util.List;

@Service
public class FacilityService {

    @Autowired
    private FacilityRepository facilityRepository;

    public List<Facility> getAllFacilities() {
        return facilityRepository.findAll();
    }

    public Facility insertFacility(Facility facility){
        return facilityRepository.save(facility);
    }

    public Facility getFacility(long id){
        return facilityRepository.findById(id).orElse(null);
    }

    @Transactional
    public boolean deleteFacility(long id){
        try {
            facilityRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Transactional
    public Facility updateFacility(Long facilityId, Facility updatedFacility) {
        Facility existingFacility = facilityRepository.findById(facilityId).orElse(null);
        if (existingFacility != null) {
            existingFacility.setFacilityName(updatedFacility.getFacilityName());
            existingFacility.setFacilityType(updatedFacility.getFacilityType());
            existingFacility.setAddress(updatedFacility.getAddress());
            existingFacility.setLocation(updatedFacility.getLocation());
            existingFacility.setPhoneNumber(updatedFacility.getPhoneNumber());
            existingFacility.setEmail(updatedFacility.getEmail());
            existingFacility.setRatings(updatedFacility.getRatings());
            existingFacility.setAmenities(updatedFacility.getAmenities());
            existingFacility.setFacilityManager(updatedFacility.getFacilityManager());

            return facilityRepository.save(existingFacility);
        }
        return null;
    }
}
