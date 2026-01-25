package com.odyssey.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.odyssey.dto.TravelPackageDto;
import com.odyssey.entity.TravelPackage;
import com.odyssey.service.TravelPackageService;

@RestController
@RequestMapping("/api/packages")
@CrossOrigin
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
			travelpackage = objectmapper.readValue(travelPackage, TravelPackageDto.class);
			travelService.savePackage(travelpackage, image);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return ResponseEntity.ok("Package submitted for admin approval");

	}

	@GetMapping("/{id}")
	public ResponseEntity<TravelPackage> getTravelPackageById(@PathVariable Long id) {
		TravelPackage travelPackage = travelService.findPackageById(id);
		return ResponseEntity.ok(travelPackage);
	}

	@GetMapping
	public ResponseEntity<java.util.List<TravelPackage>> getAllApprovedPackages() {
		return ResponseEntity.ok(travelService.getPackagesByStatus(com.odyssey.entity.Status.APPROVED));
	}

	@GetMapping("/admin/pending")
	public ResponseEntity<java.util.List<TravelPackage>> getPendingPackages() {
		return ResponseEntity.ok(travelService.getPackagesByStatus(com.odyssey.entity.Status.PENDING));
	}

	@PostMapping("/{id}/status/{status}")
	public ResponseEntity<String> updatePackageStatus(@PathVariable Long id, @PathVariable String status) {
		travelService.updatePackageStatus(id, status);
		return ResponseEntity.ok("Status updated: " + status);
	}

	@GetMapping("/{id}/image")
	public ResponseEntity<byte[]> getPackageImage(@PathVariable Long id) {
		TravelPackage pkg = travelService.findPackageById(id);
		return ResponseEntity.ok()
				.contentType(MediaType.IMAGE_JPEG)
				.body(pkg.getImage());
	}
}
