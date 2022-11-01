package com.probe.probe_springboot.authentication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import com.probe.probe_springboot.exceptions.UserNotExist;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

//    @Autowired
//    UserServiceImpl userService;

    @Autowired
    UserRepository userRepository;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public ReturnUserData signIn(LoginData login) throws NotAuthorizedException, JsonProcessingException, UserNotExist {

        User user = userRepository.findByEmail(login.getEmail());
//        System.out.println("User: " + user.toString());
//        System.out.println("from service: " + login);

        if(user == null){
            throw new UserNotExist("User does not exist");
        }

        if(!passwordEncoder.matches(login.getPassword(), user.getPassword())){
            throw new NotAuthorizedException("Wrong password");
        }
        String token = JWTHandler.generateJwtToken(login, user.getRoles());
        return ReturnUserData.createReturnObject(user, token);
    }

    public boolean validateToken(String token) throws UserNotExist, NotAuthorizedException {
        return JWTHandler.validate(token);
    }
}
