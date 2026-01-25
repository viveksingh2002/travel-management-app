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

}
