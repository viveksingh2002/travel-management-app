package com.odyssey.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    private LocalDate travelDate;
    private int travelers;
    private String bookingStatus;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private User client;

    @ManyToOne
    @JoinColumn(name = "package_id", nullable = false)
    private TravelPackage travelPackage;
}

