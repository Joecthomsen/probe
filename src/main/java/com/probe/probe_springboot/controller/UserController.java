package com.probe.probe_springboot.controller;

import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin(maxAge = 3600)
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/hello")
    public String helloWorld(){
        return "Hello, world!";
    }

    @GetMapping("/get/{cpr}")
    public User getUserById(@PathVariable String cpr){
        return userService.getUserByCpr(cpr);
    }

    @GetMapping("get/all")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/add")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }
}
