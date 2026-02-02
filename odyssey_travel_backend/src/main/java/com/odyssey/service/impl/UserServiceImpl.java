package com.odyssey.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import com.odyssey.entity.User;
import com.odyssey.repository.UserRepository;
import com.odyssey.service.UserService;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private final UserRepository userRepository;

    @Override
    public List<User> getUsersByRole(com.odyssey.entity.Role role) {
        return userRepository.findByRole(role);
    }

    @Override
    public User updateUserStatus(Long userId, boolean active) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setActive(active);
        return userRepository.save(user);
    }

    @Override
    public User createUser(User user) {
        user.setActive(true);
        return userRepository.save(user);
    }

    // @Override
    // public User getUserById(Long userId) {
    // return userRepository.findById(userId)
    // .orElseThrow(() -> new RuntimeException("User not found"));
    // }

}
