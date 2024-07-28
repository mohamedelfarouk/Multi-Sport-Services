package com.multi_sport.MSB_backend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.multi_sport.MSB_backend.entity.FacilityManager;
import com.multi_sport.MSB_backend.repository.FacilityManagerRepository;
 

import jakarta.transaction.Transactional;
@Service
public class FacilityManagerService {
    @Autowired
    private FacilityManagerRepository facilityManagerRepository;

    public List<FacilityManager> getAllFacilitiesManagers() {
          
        return facilityManagerRepository.findAll(); 
    }
    
    public FacilityManager insertFacilityManager( FacilityManager facilityManager){
        
        return facilityManagerRepository.save(facilityManager);
    }
    
    public FacilityManager getFacilityManager(long id){

        return facilityManagerRepository.findById(id).orElse(null);
    }
    @Transactional
    public boolean deleteFacilityManager(long id){
        try {
            facilityManagerRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
     @Transactional
     public FacilityManager updateFacilityManager(Long id, FacilityManager facilityManagerDetails) {
        FacilityManager facilityManager = facilityManagerRepository.findById(id).orElse(null);
        facilityManager.setFirstName(facilityManagerDetails.getFirstName());
        facilityManager.setLastName(facilityManagerDetails.getLastName());
        facilityManager.setEmail(facilityManagerDetails.getEmail());
        facilityManager.setPhoneNumber(facilityManagerDetails.getPhoneNumber());
        facilityManager.setAddress(facilityManagerDetails.getAddress()); 
        return facilityManagerRepository.save(facilityManager);
    }
}
