package com.odyssey.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.odyssey.dto.TravelPackageDto;
import com.odyssey.entity.Status;
import com.odyssey.entity.TravelPackage;
import com.odyssey.entity.User;
import com.odyssey.repository.TravelPackageRepository;
import com.odyssey.repository.UserRepository;
import com.odyssey.service.TravelPackageService;



@Service
@Transactional
public class TravelPackageServiceImpl implements TravelPackageService {

	@Autowired
	private TravelPackageRepository travelRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public TravelPackage findPackageById(Long id)
	{
		return travelRepo.findById(id).orElseThrow(()->new RuntimeException("Package not found"));
	}

	@Override
	public void savePackage(TravelPackageDto dto) {
		
		User agent=new User();
		agent.setUserId(dto.getAgentId());
        // Image logic removed as per requirement

        TravelPackage travelPackage = new TravelPackage();
        travelPackage.setTitle(dto.getTitle());
        travelPackage.setDescription(dto.getDescription());
        travelPackage.setPrice(dto.getPrice());
        travelPackage.setDestination(dto.getDestination());
        travelPackage.setAgent(agent);
        // travelPackage.setImage(null); 
        travelPackage.setStatus(Status.PENDING); // admin approval later

        travelRepo.save(travelPackage);
	}

	@Override
	public List<TravelPackage> getAllPackages() {
		// TODO Auto-generated method stub	
		return travelRepo.findAll();
	}

	@Override
	public List<TravelPackage> getPackagesByStatus() {
		// TODO Auto-generated method stub
		
		return travelRepo.findByStatus(Status.APPROVED);
	}

	@Override
	public List<TravelPackage> getPackagesByAgentId(Long agentId) {
		// TODO Auto-generated method stub
		return travelRepo.findByAgent_UserId(agentId);
	}

	@Override
	public Optional<TravelPackage> getPackageById(Long id) {
		// TODO Auto-generated method stub
		return Optional.empty();
	}

	@Override
	public TravelPackage updatePackageStatus(Long id, Status status) {
		// TODO Auto-generated method stub
		return null;
	}
}
