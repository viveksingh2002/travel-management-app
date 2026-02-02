package com.odyssey.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

import com.odyssey.entity.Role;
import com.odyssey.entity.User;
import com.odyssey.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // CREATE USER,Register
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    // // GET USER BY ID
    // @GetMapping("/{id}")
    // public User getUser(@PathVariable Long id) {
    // return userService.getUserById(id);
    // }

    // UPDATE USER STATUS (BLOCK/UNBLOCK),for user mngement
    @PutMapping("/{id}/block")
    public User updateStatus(@PathVariable Long id, @RequestParam boolean blocked) {
        // blocked=true means active=false
        return userService.updateUserStatus(id, !blocked);
    }

    // get user whose role is agent, for agent mngment
    @GetMapping("/role/{role}")
    public ResponseEntity<List<User>> getUsersByRole(@PathVariable String role) {
        return ResponseEntity.ok(userService.getUsersByRole(Role.valueOf(role.toUpperCase())));
    }

    // for agent mngement
    @PostMapping("/{id}/status/{active}")
    public ResponseEntity<String> updateUserStatus(@PathVariable Long id, @PathVariable boolean active) {
        userService.updateUserStatus(id, active);
        return ResponseEntity.ok("User status updated to: " + (active ? "ACTIVE" : "INACTIVE"));
    }
}
