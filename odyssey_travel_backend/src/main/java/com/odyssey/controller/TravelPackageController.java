package com.odyssey.controller;

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
import com.odyssey.entity.TravelPackage;
import com.odyssey.service.TravelPackageService;

@RestController
@RequestMapping("/api/packages")
@CrossOrigin
public class TravelPackageController {

	@Autowired
	private TravelPackageService travelService;
	
	private final ObjectMapper objectmapper=new ObjectMapper();
	@PostMapping( consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<String> createPackage(@RequestPart("data") String travelPackage, @RequestPart("image") MultipartFile image)
	{
		System.out.println("DATA = " + travelPackage);
	    System.out.println("FILE = " + image.getOriginalFilename());
	    TravelPackageDto travelpackage;
		try {
			travelpackage = objectmapper.readValue(travelPackage,TravelPackageDto.class);
			travelService.savePackage(travelpackage,image);
			return ResponseEntity.ok("Package submitted for admin approval");
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(500).body("Error: " + e.getMessage());
		}
		
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity <TravelPackage> getTravelPackageById(@PathVariable Long id)
	{
		TravelPackage travelPackage=travelService.findPackageById(id);
		return ResponseEntity.ok(travelPackage);
		
	}
	
	
	
}
