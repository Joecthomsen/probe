package com.probe.probe_springboot.authentication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/authentication" )
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public String login(@RequestBody LoginData loginData) throws NotAuthorizedException, JsonProcessingException {
        System.out.println("From controller: " + loginData);
        return loginService.login(loginData);
    }

    @PostMapping("/validate/{token}")
        public boolean validateToken(@PathVariable String token) throws NotAuthorizedException {
        return loginService.validateToken(token);
    }
}
