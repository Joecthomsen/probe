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

    @PostMapping("/post")
    public String login(@RequestBody LoginData loginData) throws NotAuthorizedException, JsonProcessingException {
        System.out.println("From controller: " + loginData);
        return loginService.postLoginData(loginData);
    }

    @PostMapping("/validate/{token}")
        public ValidationData validateToken(@PathVariable String token){
        return loginService.validateToken(token);
    }
}
