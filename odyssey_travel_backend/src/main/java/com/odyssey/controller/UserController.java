package com.odyssey.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

import com.odyssey.entity.User;
import com.odyssey.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // CREATE USER
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    // GET USER BY ID
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    // GET ALL USERS (ADMIN)
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // DEACTIVATE USER
    @PutMapping("/{id}/deactivate")
    public User deactivate(@PathVariable Long id) {
        return userService.deactivateUser(id);
    }
    // UPDATE USER STATUS (BLOCK/UNBLOCK)
    @PutMapping("/{id}/block")
    public User updateStatus(@PathVariable Long id, @RequestParam boolean blocked) {
        // blocked=true means active=false
        return userService.updateUserStatus(id, !blocked);
    }
}
