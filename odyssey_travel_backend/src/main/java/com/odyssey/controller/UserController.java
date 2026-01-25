package com.odyssey.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.odyssey.entity.User;
import com.odyssey.service.UserService;

@RestController
@RequestMapping("/user/")
@CrossOrigin
public class UserController {

	@Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() { // Admin only typically
        return ResponseEntity.ok(userService.getAllUsers());
    }
}
