package com.multi_sport.MSB_backend.controller;

import com.multi_sport.MSB_backend.entity.TrainerPackage;
import com.multi_sport.MSB_backend.service.TrainerPackageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trainer-packages")
public class TrainerPackageController {

    @Autowired
    private TrainerPackageService trainerPackageService;

    @GetMapping
    public List<TrainerPackage> getAllPackages() {
        return trainerPackageService.getAllPackages();
    }

    @GetMapping("/{packageId}")
    public TrainerPackage getPackageById(@PathVariable Long packageId) {
        return trainerPackageService.getPackageById(packageId);
    }
    @GetMapping("/trainer/{trainerId}")
    public List<TrainerPackage> getPackagesByTrainerId(@PathVariable Long trainerId) {
        return trainerPackageService.getPackagesByTrainerId(trainerId);
    }


    @PostMapping
    public TrainerPackage createPackage(@RequestBody TrainerPackage trainerPackage) {
        return trainerPackageService.createPackage(trainerPackage);
    }

    @PutMapping("/{packageId}")
    public TrainerPackage updatePackage(@PathVariable Long packageId, @RequestBody TrainerPackage updatedPackage) {
        return trainerPackageService.updatePackage(packageId, updatedPackage);
    }

    @DeleteMapping("/{packageId}")
    public void deletePackage(@PathVariable Long packageId) {
        trainerPackageService.deletePackage(packageId);
    }
}
