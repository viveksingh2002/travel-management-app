package com.odyssey.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "travel_packages")
public class TravelPackage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long packageId;

    private String title;
    private String description;
    private String destination;
    private double price;

    private String status; // DRAFT, APPROVED, REJECTED

    @ManyToOne
    @JoinColumn(name = "agent_id", nullable = false)
    private User agent;
}
