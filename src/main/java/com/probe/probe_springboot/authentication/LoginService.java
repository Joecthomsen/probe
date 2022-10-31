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

    public ReturnUserData signIn(LoginData login) throws NotAuthorizedException, JsonProcessingException {

        User user = userService.findByEmail(login.getEmail());
        System.out.println("from service: " + login);
        if(user != null && user.getEmail().equals(login.getEmail()) && user.getHashedPassword().equals(login.getPassword())){
            String token = JWTHandler.generateJwtToken(login);
            System.out.println("ReturnUserObj: " + ReturnUserData.createReturnObject(user,token));
            return ReturnUserData.createReturnObject(user, token);
        }
        throw new NotAuthorizedException("Wrong username");
    }

    public boolean validateToken(String token) throws UserNotFound, NotAuthorizedException {
        return JWTHandler.validate(token);
    }
}
