package com.odyssey.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.odyssey.entity.Booking;
import com.odyssey.entity.Priority;
import com.odyssey.entity.SupportTicket;
import com.odyssey.entity.SupportTicketStatus;
import com.odyssey.entity.User;
import com.odyssey.repository.BookingRepository;
import com.odyssey.repository.SupportTicketRepository;
import com.odyssey.repository.UserRepository;
import com.odyssey.service.SupportTicketService;
@Service
public class SupportTicketServiceImpl implements SupportTicketService {

	@Autowired
	private SupportTicketRepository supportTicketRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@Override
	public SupportTicket raiseTicket(Long userId, Long bookingId, String subject, String description,
			Priority priority) {
		
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new RuntimeException("User not found"));
		
		Booking booking = bookingId !=null
				? bookingRepository.findById(bookingId).orElse(null)
						: null;
		
		SupportTicket ticket = new SupportTicket();
		ticket.setUser(user);
		ticket.setBooking(booking);
		ticket.setSubject(subject);
		ticket.setDescription(description);
		ticket.setPriority(priority);
		ticket.setStatus(SupportTicketStatus.OPEN);
		ticket.setCreatedAt(LocalDateTime.now());
		ticket.setLastUpdatedAt(LocalDateTime.now());
		
		return supportTicketRepository.save(ticket);
		
	}

	@Override
	public List<SupportTicket> getTicketsByUser(Long userId) {
		
		return supportTicketRepository.findByUserUserId(userId);
	}

	@Override
	public SupportTicket updateTicketStatus(Long ticketId, SupportTicketStatus status) {
		
		SupportTicket ticket = supportTicketRepository.findById(ticketId)
				.orElseThrow(() ->  new RuntimeException("Ticket not found"));
		
		ticket.setStatus(status);
		ticket.setLastUpdatedAt(LocalDateTime.now());
		return supportTicketRepository.save(ticket) ;
	}

}
