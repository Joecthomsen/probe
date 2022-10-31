package com.probe.probe_springboot.authentication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import com.probe.probe_springboot.exceptions.UserNotFound;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    UserServiceImpl userService;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public ReturnUserData signIn(LoginData login) throws NotAuthorizedException, JsonProcessingException {

        User user = userService.findByEmail(login.getEmail());
        System.out.println("from service: " + login);

        if(user == null){
            throw new NotAuthorizedException("User does not exist");
        }

        if(!passwordEncoder.matches(login.getPassword(), user.getPassword())){
            throw new NotAuthorizedException("Wrong password");
        }

        String token = JWTHandler.generateJwtToken(login);
        System.out.println("ReturnUserObj: " + ReturnUserData.createReturnObject(user,token));
        return ReturnUserData.createReturnObject(user, token);
    }

    public boolean validateToken(String token) throws UserNotFound, NotAuthorizedException {
        return JWTHandler.validate(token);
    }
}
