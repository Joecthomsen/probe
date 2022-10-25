package com.probe.probe_springboot.authentication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import com.probe.probe_springboot.exceptions.UserNotFound;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    UserServiceImpl userService;
    public String postLoginData(LoginData login) throws NotAuthorizedException, JsonProcessingException {

        User user = userService.getUserByEmail(login.getEmail());
        System.out.println("from service: " + login);
        if(user != null && user.getEmail().equals(login.getEmail()) && user.getHashedPassword().equals(login.getPassword())){
            return JWTHandler.generateJwtToken(login);
        }
        throw new NotAuthorizedException("Wrong username");
    }

    public ValidationData validateToken(String token) throws UserNotFound {
        return JWTHandler.validate(token);
    }
}
