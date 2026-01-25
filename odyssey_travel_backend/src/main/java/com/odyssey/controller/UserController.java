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

import com.odyssey.entity.Role;
import com.odyssey.entity.User;
import com.odyssey.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/role/{role}")
    public ResponseEntity<List<User>> getUsersByRole(@PathVariable String role) {
        return ResponseEntity.ok(userService.getUsersByRole(Role.valueOf(role.toUpperCase())));
    }

    @PostMapping("/{id}/status/{active}")
    public ResponseEntity<String> updateUserStatus(@PathVariable Long id, @PathVariable boolean active) {
        userService.updateUserStatus(id, active);
        return ResponseEntity.ok("User status updated to: " + (active ? "ACTIVE" : "INACTIVE"));
    }
}
