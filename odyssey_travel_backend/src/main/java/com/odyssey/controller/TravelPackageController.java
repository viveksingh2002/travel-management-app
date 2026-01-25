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
@CrossOrigin(origins = "*") // Fail-safe for CORS
public class TravelPackageController {

	@Autowired
	private TravelPackageService travelService;
	
	private final ObjectMapper objectmapper=new ObjectMapper();
	@PostMapping
	public ResponseEntity<String> createPackage(@RequestBody TravelPackageDto travelPackage)
	{
		try {
			// Assuming agentId is passed in JSON. If not, we might need to set a default or extract from context.
            // For now, trusting frontend sends it.
			travelService.savePackage(travelPackage);
            return ResponseEntity.ok("Package submitted for admin approval");
		} catch (Exception e) {
			e.printStackTrace();
            return ResponseEntity.badRequest().body("Error creating package: " + e.getMessage());
		}
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity <TravelPackage> getTravelPackageById(@PathVariable Long id)
	{
		TravelPackage travelPackage=travelService.findPackageById(id);
		return ResponseEntity.ok(travelPackage);
		
	}
	
	
	
}
