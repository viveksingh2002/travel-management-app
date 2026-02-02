package com.odyssey.service;

import java.util.List;

import com.odyssey.entity.Role;
import com.odyssey.entity.User;

public interface UserService {

    User createUser(User user);

    // User getUserById(Long userId);

    List<User> getUsersByRole(Role role);

    User updateUserStatus(Long userId, boolean active);

}
