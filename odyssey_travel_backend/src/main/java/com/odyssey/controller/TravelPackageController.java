package com.odyssey.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.odyssey.dto.TravelPackageDto;
import com.odyssey.entity.Status;
import com.odyssey.entity.TravelPackage;
import com.odyssey.service.TravelPackageService;

@RestController
@RequestMapping("/api/packages")
@CrossOrigin("*")
public class TravelPackageController {

	@Autowired
	private TravelPackageService travelService;

	private final ObjectMapper objectmapper = new ObjectMapper();

	@PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<String> createPackage(@RequestPart("data") String travelPackage,
			@RequestPart("image") MultipartFile image) {
		System.out.println("DATA = " + travelPackage);
		System.out.println("FILE = " + image.getOriginalFilename());
		TravelPackageDto travelpackage;
		try {
			// Convert JSON string to DTO
			travelpackage = objectmapper.readValue(travelPackage, TravelPackageDto.class);

			// Save image in backend in upload folder
			String uploadDir = "uploads/packages/";
			Files.createDirectories(Paths.get(uploadDir));

			// get file name
			String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();

			Path filePath = Paths.get(uploadDir + fileName);
			Files.write(filePath, image.getBytes());

			String imageUrl = "/uploads/packages/" + fileName;
			travelService.savePackage(travelpackage, imageUrl);
			return ResponseEntity.ok("Package submitted for admin approval");
		} catch (Exception e) {

			e.printStackTrace();
			return ResponseEntity.status(500).body("Error: " + e.getMessage());
		}

	}

	// for booktravelpackage page
	@GetMapping("/{id}")
	public ResponseEntity<TravelPackage> getTravelPackageById(@PathVariable Long id) {
		TravelPackage travelPackage = travelService.findPackageById(id);
		return ResponseEntity.ok(travelPackage);
	}

	@GetMapping
	public ResponseEntity<List<TravelPackage>> getAllApprovedPackages() {
		// Only show Approved packages from Active Agents
		return ResponseEntity.ok(travelService.getPackagesByStatusAndAgentActive(Status.APPROVED));
	}

	@GetMapping("/admin/pending")
	public ResponseEntity<List<TravelPackage>> getPendingPackages() {
		return ResponseEntity.ok(travelService.getPackagesByStatus(Status.PENDING));
	}

	// to approve package by admin
	@PostMapping("/{id}/status/{status}")
	public ResponseEntity<String> updatePackageStatus(@PathVariable Long id, @PathVariable String status) {
		travelService.updatePackageStatus(id, status);
		return ResponseEntity.ok("Status updated: " + status);
	}

}
