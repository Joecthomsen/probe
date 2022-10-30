/*
* Created by Johannes Claudius Thomsen october 2022
*
* Note: Every endpoint with "/authorize" in front of it, will require the user to have a valid JWT.
* */

package com.probe.probe_springboot.controller;

import com.probe.probe_springboot.model.Role;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/user" )
public class UserController {
    @Autowired
    private UserServiceImpl userServiceImpl;

//    @GetMapping("/authorize/id/{email}")
//    public ResponseEntity<User> getUserById(@PathVariable String email/*, @RequestHeader("token") String token, @RequestHeader("email") String email*/){
////        HttpHeaders responseHeader = new HttpHeaders();
////        responseHeader.set("token", token);
////        responseHeader.set("email", email);
//       // return ResponseEntity.ok().headers(responseHeader).body(userServiceImpl.getUserById(id));
//        return ResponseEntity.ok().body(userServiceImpl.findByEmail(email));
//        //return userServiceImpl.getUserById(id);
//    }

    @GetMapping("/hello")
    public String helloWorld(){
        return "Hello from controller";
    }

    @GetMapping("/authorize/{email}")
    public User getUserByEmail(@PathVariable String email){
        return userServiceImpl.findByEmail(email);
    }

    @GetMapping("/all")
    public List<User> getAllUsers(){
        return userServiceImpl.getUsers();
    }

    @GetMapping("/authorize/roles")
    public List<Role> getAllRoles(){
        return userServiceImpl.getAllRoles();
    }

    @PostMapping("/add")
    public ResponseEntity<User> saveUser(@RequestBody User user){
            URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/user/add").toUriString());
            return ResponseEntity.created(uri).body(userServiceImpl.saveUser(user));
    }

    @PostMapping("/authorize/role/save")
    public Role saveRole(@RequestBody Role role){
        return userServiceImpl.saveRole(role);
    }

    @PutMapping("/authorize/role/addroletouser/userid={userEmail}/rolename={roleName}")
    public void addRoleToUser(@PathVariable String userEmail, @PathVariable String roleName){
        userServiceImpl.addRoleToUser(userEmail, roleName);
    }
}
