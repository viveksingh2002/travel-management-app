package com.odyssey.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.odyssey.dto.BookingRequestDTO;
import com.odyssey.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin
public class BookingController {

	@Autowired
	private BookingService bookingService;

	@PostMapping
	public ResponseEntity<String> createBooking(
			@RequestBody BookingRequestDTO dto) {

		bookingService.createBooking(dto);
		return ResponseEntity.ok("Booking and Payment Successful");
	}

	@org.springframework.web.bind.annotation.GetMapping("/user/{userId}")
	public ResponseEntity<java.util.List<com.odyssey.dto.BookingResponseDto>> getUserBookings(
			@org.springframework.web.bind.annotation.PathVariable Long userId) {
		return ResponseEntity.ok(bookingService.getAllBookings(userId));
	}
}
