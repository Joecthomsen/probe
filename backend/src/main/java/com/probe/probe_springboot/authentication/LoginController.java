package com.probe.probe_springboot.authentication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/authentication" )
public class LoginController {
    @Autowired
    private LoginService loginService;

    @CrossOrigin(origins = "*")
    @PostMapping("/signin")
    public ReturnUserData login(@RequestBody LoginData loginData) throws NotAuthorizedException, JsonProcessingException {
        System.out.println("From controller: " + loginData);
        return loginService.signIn(loginData);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/validate/{token}")
        public boolean validateToken(@PathVariable String token) throws NotAuthorizedException {
        return loginService.validateToken(token);
    }
}
