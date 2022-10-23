package com.probe.probe_springboot.service;

import com.probe.probe_springboot.exceptions.UserNotFound;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user){
        return userRepository.save(user);
    }

    public User getUserById(Integer id){
        return userRepository.findById(id).orElseThrow( () -> new UserNotFound("User with id " + id + " not found!"));
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
}
