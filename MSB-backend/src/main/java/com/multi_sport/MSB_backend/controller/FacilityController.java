package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.Facility;
import com.multi_sport.MSB_backend.service.FacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/facility")
public class FacilityController {

    @Autowired
    private FacilityService facilityService;

    @GetMapping
    public List<Facility> getAllFacilities() {
        return facilityService.getAllFacilities();
    }

    @GetMapping("{id}")
    public Facility getFacility(@PathVariable long id){
        return facilityService.getFacility(id);
    }

    @PostMapping
    public Facility addFacility(@RequestBody Facility facility){
        return facilityService.insertFacility(facility);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteFacility(@PathVariable("id") long id) {
        if (facilityService.deleteFacility(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{facilityId}")
    public ResponseEntity<Facility> updateFacility(
            @PathVariable("facilityId") Long facilityId,
            @RequestBody Facility updatedFacility) {
        try {
            Facility facility = facilityService.updateFacility(facilityId, updatedFacility);
            if (facility != null) {
                return ResponseEntity.ok(facility);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
