package com.probe.probe_springboot.authentication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import com.probe.probe_springboot.exceptions.UserNotExist;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.repositories.UserRepository;
import io.micrometer.core.annotation.Counted;
import io.prometheus.client.Counter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class LoginService {

    public final static Counter attemptCounter = Counter.build().name("LoginAttempts").help("Total login attempts").register();
    public final static Counter failedLoginAttapts = Counter.build().name("loginFails").help("Total failed login").register();

    @Autowired
    UserRepository userRepository;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Counted(description = "Total_signin_attempt", value = "signin")
    public ReturnUserData signIn(LoginData login) throws NotAuthorizedException, JsonProcessingException, UserNotExist {

        attemptCounter.inc();
        User user = userRepository.findByEmail(login.getEmail());

        if(user == null){
            failedLoginAttapts.inc();
            throw new UserNotExist("User does not exist");
        }

        if(!passwordEncoder.matches(login.getPassword(), user.getPassword())){
            failedLoginAttapts.inc();
            throw new NotAuthorizedException("Wrong password");
        }
        String token = JWTHandler.generateJwtToken(login, user.getRoles());
        return ReturnUserData.createReturnObject(user, token);
    }

    public boolean validateToken(String token) throws UserNotExist, NotAuthorizedException {
        return JWTHandler.validate(token);
    }
}
