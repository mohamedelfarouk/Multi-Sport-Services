package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.FacilityManager;
import com.multi_sport.MSB_backend.service.FacilityManagerService;
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/facilityManagers")
public class FacilityManagerController {

    @Autowired
    private FacilityManagerService facilityManagerService;

    @GetMapping
    public List<FacilityManager> getAllFacilityManagers() {
        return facilityManagerService.getAllFacilitiesManagers();
    }

    @GetMapping("/{id}")
    public FacilityManager getFacilityManagerById(@PathVariable Long id) {
     
                 
        return facilityManagerService.getFacilityManager(id); 
    }

    @PostMapping
    public FacilityManager createFacilityManager(@RequestBody FacilityManager facilityManager) {
        return facilityManagerService.insertFacilityManager(facilityManager);
    }

    @PutMapping("/{id}")
    public FacilityManager updateFacilityManager(@PathVariable Long id, @RequestBody FacilityManager facilityManagerDetails) {
        return facilityManagerService.updateFacilityManager(id, facilityManagerDetails);
         
    }

    @DeleteMapping("/{id}")
    public boolean deleteFacilityManager(@PathVariable Long id) {
    
    if (facilityManagerService.deleteFacilityManager(id)) {
        return true;
    }  else{
        return false;
    }   
         
    }
}

