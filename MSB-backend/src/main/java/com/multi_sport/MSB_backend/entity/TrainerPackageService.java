package com.multi_sport.MSB_backend.Services;

import com.multi_sport.MSB_backend.entity.TrainerPackage;
import com.multi_sport.MSB_backend.repository.TrainerPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainerPackageService {

    @Autowired
    private TrainerPackageRepository trainerPackageRepository;

    public List<TrainerPackage> getAllPackages() {
        return trainerPackageRepository.findAll();
    }

    public TrainerPackage getPackageById(Long packageId) {
        return trainerPackageRepository.findById(packageId)
                .orElseThrow(() -> new RuntimeException("Package not found"));
    }

    public TrainerPackage createPackage(TrainerPackage trainerPackage) {
        return trainerPackageRepository.save(trainerPackage);
    }

    public TrainerPackage updatePackage(Long packageId, TrainerPackage updatedPackage) {
        TrainerPackage existingPackage = trainerPackageRepository.findById(packageId)
                .orElseThrow(() -> new RuntimeException("Package not found"));

        existingPackage.setName(updatedPackage.getName());
        existingPackage.setDescription(updatedPackage.getDescription());
        existingPackage.setPrice(updatedPackage.getPrice());
        existingPackage.setLongTerm(updatedPackage.isLongTerm());

        return trainerPackageRepository.save(existingPackage);
    }

    public void deletePackage(Long packageId) {
        trainerPackageRepository.deleteById(packageId);
    }
}
