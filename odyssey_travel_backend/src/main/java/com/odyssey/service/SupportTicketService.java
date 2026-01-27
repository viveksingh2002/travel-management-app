package com.odyssey.service;

import java.util.List;

import com.odyssey.dto.SupportTicketResponseDTO;
import com.odyssey.entity.Priority;
import com.odyssey.entity.SupportTicketStatus;

public interface SupportTicketService {

    SupportTicketResponseDTO raiseTicket(
            Long userId,
            Long bookingId,
            String subject,
            String description,
            Priority priority
    );

    List<SupportTicketResponseDTO> getTicketsByUser(Long userId);

    SupportTicketResponseDTO updateTicketStatus(
            Long ticketId,
            SupportTicketStatus status
    );
}
