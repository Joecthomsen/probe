package com.probe.probe_springboot.authentication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import com.probe.probe_springboot.exceptions.UserNotFound;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    public String postLoginData(LoginData login) throws NotAuthorizedException, JsonProcessingException {
        System.out.println("from service: " + login);
        if(login != null && "Brian".equals(login.getUserName()) && "kodeord".equals(login.getPassword())){
            return JWTHandler.generateJwtToken(login);
        }
        throw new NotAuthorizedException("Wrong username");
    }

    public LoginData validateToken(String token) throws UserNotFound {
        return JWTHandler.validate(token);
    }
}
