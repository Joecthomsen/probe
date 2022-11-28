package com.probe.probe_springboot.authentication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import com.probe.probe_springboot.model.Admin;
import com.probe.probe_springboot.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/admin")
public class AdminLoginController {
    @Autowired
    private AdminService adminService;

    @CrossOrigin(origins = "*")
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Admin admin) {
        String token = null;
        try {
            token = adminService.authenticate(admin.getUsername(), admin.getPassword());
        } catch (NotAuthorizedException | NotFoundException | JsonProcessingException e) {
            return new ResponseEntity<>("Login failed", HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello from admin";
    }
}
