package com.probe.probe_springboot.authentication;

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
        System.out.println("password");
        try {
            adminService.authenticate(admin.getUsername(), admin.getPassword());
        } catch (NotAuthorizedException | NotFoundException e) {
            return new ResponseEntity<>("Login failed", HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello from admin";
    }
}
