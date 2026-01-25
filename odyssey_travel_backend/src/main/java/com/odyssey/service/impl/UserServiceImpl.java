package com.odyssey.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.odyssey.entity.User;
import com.odyssey.repository.UserRepository;
import com.odyssey.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public List<User> getUsersByRole(com.odyssey.entity.Role role) {
		return userRepo.findByRole(role);
	}

	@Override
	public void updateUserStatus(Long userId, boolean active) {
		User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
		user.setActive(active);
		userRepo.save(user);
	}

}
