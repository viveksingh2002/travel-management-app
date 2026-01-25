package com.odyssey.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "travel_packages")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TravelPackage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long packageId;

    private String title;
    private String description;
    private String destination;
    private double price;
    private int duration;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    @com.fasterxml.jackson.annotation.JsonIgnore
    private byte[] image;

    @ManyToOne()
    @JoinColumn(name = "agent_id", nullable = false)
    private User agent;
}
