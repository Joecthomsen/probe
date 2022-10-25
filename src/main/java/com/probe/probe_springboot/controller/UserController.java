package com.probe.probe_springboot.controller;

import com.probe.probe_springboot.exceptions.UserAlreadyExists;
import com.probe.probe_springboot.model.Role;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/user" )
@CrossOrigin(maxAge = 3600)
public class UserController {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @GetMapping("/byid/id={id}")
    public User getUserById(@PathVariable Long id){
        return userServiceImpl.getUserById(id);
    }

    @GetMapping("/byemail/email={email}")
    public User getUserByEmail(@PathVariable String email){
        return userServiceImpl.getUserByEmail(email);
    }

    @GetMapping("/all")
    public List<User> getAllUsers(){
        return userServiceImpl.getUsers();
    }

    @GetMapping("/roles")
    public List<Role> getAllRoles(){
        return userServiceImpl.getAllRoles();
    }

    @PostMapping("/add")
    public ResponseEntity<User> saveUser(@RequestBody User user){

            URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/add").toUriString());
            return ResponseEntity.created(uri).body(userServiceImpl.saveUser(user));
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
