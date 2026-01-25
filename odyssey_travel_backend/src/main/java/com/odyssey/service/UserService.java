package com.odyssey.service;

import java.util.List;

import com.odyssey.entity.User;

public interface UserService {

    List<User> getAllUsers();

    User createUser(User user);

    User getUserById(Long userId);

    User deactivateUser(Long userId);

    User updateUserStatus(Long id, boolean active);

}
