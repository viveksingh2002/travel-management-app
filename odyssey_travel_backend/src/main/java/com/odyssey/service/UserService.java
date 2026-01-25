package com.odyssey.service;

import java.util.List;

import com.odyssey.entity.Role;
import com.odyssey.entity.User;

public interface UserService {

	List<User> getAllUsers();

	List<User> getUsersByRole(Role role);

	void updateUserStatus(Long userId, boolean active);

}
