package com.odyssey.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.odyssey.dto.SupportTicketResponseDTO;
import com.odyssey.entity.Priority;
import com.odyssey.entity.SupportTicketStatus;
import com.odyssey.service.SupportTicketService;

@RestController
@RequestMapping("/api/support")
@CrossOrigin
public class SupportTicketController {

    @Autowired
    private SupportTicketService supportTicketService;

    // Raise ticket (User / Agent)
    @PostMapping
    public ResponseEntity<SupportTicketResponseDTO> raiseTicket(
            @RequestParam Long userId,
            @RequestParam(required = false) Long bookingId,
            @RequestParam String subject,
            @RequestParam String description,
            @RequestParam Priority priority) {

        return ResponseEntity.ok(
                supportTicketService.raiseTicket(
                        userId, bookingId, subject, description, priority
                )
        );
    }

    // User / Agent dashboard
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<SupportTicketResponseDTO>> getUserTickets(
            @PathVariable Long userId) {

        return ResponseEntity.ok(
                supportTicketService.getTicketsByUser(userId)
        );
    }

    // Admin : update ticket status
    @PutMapping("/{ticketId}/status")
    public ResponseEntity<SupportTicketResponseDTO> updateStatus(
            @PathVariable Long ticketId,
            @RequestParam SupportTicketStatus status) {

        return ResponseEntity.ok(
                supportTicketService.updateTicketStatus(ticketId, status)
        );
    }
}
