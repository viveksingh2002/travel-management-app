package com.odyssey.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.odyssey.entity.Status;
import com.odyssey.entity.TravelPackage;

import jakarta.persistence.LockModeType;

@Repository
public interface TravelPackageRepository extends JpaRepository<TravelPackage, Long> {

	List<TravelPackage> findByStatus(Status status);

	List<TravelPackage> findByStatusAndAgent_ActiveTrue(Status status);

	List<TravelPackage> findByAgentId(Long agentId);
	
	@Lock(LockModeType.PESSIMISTIC_WRITE)
	@Query("SELECT p FROM TravelPackage p WHERE p.id = :id")
	TravelPackage findByIdForUpdate(@Param("id") Long id);


}
