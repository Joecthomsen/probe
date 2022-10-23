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

    @PostMapping("/post")
    public String login(@RequestBody LoginData loginData) throws NotAuthorizedException, JsonProcessingException {
        System.out.println("From controller: " + loginData);
        return loginService.postLoginData(loginData);
    }

    @PostMapping("/validate/{token}")
        public LoginData validateToken(@PathVariable String token){
        return loginService.validateToken(token);
    }
}
