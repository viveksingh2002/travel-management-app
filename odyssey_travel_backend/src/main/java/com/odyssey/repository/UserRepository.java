package com.odyssey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.odyssey.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

	User getReferenceById(Long agentId);
}
