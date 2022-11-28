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
import io.micrometer.core.instrument.MeterRegistry;


@Service
public class LoginService {
    @Autowired
    MeterRegistry meterRegistry;
    @Autowired
    UserRepository userRepository;
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    public ReturnUserData signIn(LoginData login) throws NotAuthorizedException, JsonProcessingException, UserNotExist {

        User user = userRepository.findByEmail(login.getEmail());

        if(user == null){
            meterRegistry.counter("total_login_attempts_where_user_not_exist").increment();
            throw new UserNotExist("User does not exist");
        }

        if(!passwordEncoder.matches(login.getPassword(), user.getPassword())){
            meterRegistry.counter("total_login_attempts_where_password_is_wrong").increment();
            throw new NotAuthorizedException("Wrong password");
        }
        String token = JWTHandler.generateJwtToken(login, user.getRoles());
        meterRegistry.counter("total_successfully_login").increment();
        return ReturnUserData.createReturnObject(user, token);
    }

    public boolean validateToken(String token) throws UserNotExist, NotAuthorizedException {

        boolean validated =  JWTHandler.validate(token);
        if(validated){
            meterRegistry.counter("jwt_successfully_validated").increment();
            return true;
        }
        meterRegistry.counter("jwt_not_successfully_validated").increment();
        return false;
    }
}
