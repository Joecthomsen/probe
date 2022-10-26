package com.probe.probe_springboot.authentication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/authentication" )
@CrossOrigin(maxAge = 3600)
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public String login(@RequestBody LoginData loginData) throws NotAuthorizedException, JsonProcessingException {
        System.out.println("From controller: " + loginData);
        return loginService.login(loginData);
    }

    @PostMapping("/validate/{token}")
        public ValidationData validateToken(@PathVariable String token){
        return loginService.validateToken(token);
    }
}
