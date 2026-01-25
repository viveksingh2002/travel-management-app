package com.odyssey.service;

import java.util.List;

import com.odyssey.entity.Priority;
import com.odyssey.entity.SupportTicket;
import com.odyssey.entity.SupportTicketStatus;

public interface SupportTicketService {
	
	 SupportTicket raiseTicket(
		        Long userId,
		        Long bookingId,
		        String subject,
		        String description,
		        Priority priority
		    );
	 
	 List<SupportTicket> getTicketsByUser(Long userId);

	    SupportTicket updateTicketStatus(
	        Long ticketId,
	        SupportTicketStatus status
	        );

}
