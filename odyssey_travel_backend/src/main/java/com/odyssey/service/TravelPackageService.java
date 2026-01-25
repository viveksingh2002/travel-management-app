package com.odyssey.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.odyssey.dto.TravelPackageDto;
import com.odyssey.entity.Status;
import com.odyssey.entity.TravelPackage;

public interface TravelPackageService {
 
	TravelPackage findPackageById(Long id);

	List<TravelPackage> getAllPackages();

    List<TravelPackage> getPackagesByStatus();

    List<TravelPackage> getPackagesByAgentId(Long agentId);

    Optional<TravelPackage> getPackageById(Long id);

    TravelPackage updatePackageStatus(Long id, Status status);

	void savePackage(TravelPackageDto dto);
}
