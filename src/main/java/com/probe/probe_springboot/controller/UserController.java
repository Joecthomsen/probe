package com.probe.probe_springboot.controller;

import com.probe.probe_springboot.model.Role;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user" )
@CrossOrigin(maxAge = 3600)
public class UserController {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @GetMapping("/get/id={id}")
    public User getUserById(@PathVariable Long id){
        return userServiceImpl.getUserById(id);
    }

    @GetMapping("/get/email={email}")
    public User getUserByEmail(@PathVariable String email){
        return userServiceImpl.getUserByEmail(email);
    }

    @GetMapping("get/all")
    public List<User> getAllUsers(){
        return userServiceImpl.getUsers();
    }

    @GetMapping("/roles")
    public List<Role> getAllRoles(){
        return userServiceImpl.getAllRoles();
    }

    @PostMapping("/add")
    public User saveUser(@RequestBody User user){
        return userServiceImpl.saveUser(user);
    }

    @PostMapping("/role/save")
    public Role saveRole(@RequestBody Role role){
        return userServiceImpl.saveRole(role);
    }

    @PutMapping("role/addroletouser/userid={userId}/rolename={roleName}")
    public void addRoleToUser(@PathVariable Long userId, @PathVariable String roleName){
        userServiceImpl.addRoleToUser(userId, roleName);
    }
}
