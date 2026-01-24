package com.odyssey.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "support_tickets")
public class SupportTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ticketId;

    private String issue;
    private String status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}

