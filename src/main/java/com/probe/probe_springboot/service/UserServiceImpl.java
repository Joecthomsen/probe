package com.probe.probe_springboot.service;

import com.probe.probe_springboot.exceptions.UserAlreadyExists;
import com.probe.probe_springboot.exceptions.UserNotExist;
import com.probe.probe_springboot.model.Role;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.repositories.RoleRepository;
import com.probe.probe_springboot.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public User saveUser(User user) throws UserAlreadyExists {

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        User userTest = userRepository.findByEmail(user.getEmail());
        if (userTest == null) {
            return userRepository.save(user);
        }
        throw new UserAlreadyExists("User with email " + user.getEmail() + " already exists");
    }

    @Override
    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String userEmail, String roleName) {
        User user = userRepository.findById(userEmail)
                .orElseThrow(() -> new UserNotExist("User with email " + userEmail + " not found!"));
        Role role = roleRepository.findByRoleName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public User updateUser(User updatedUser, String email) {
        return userRepository.findById(email)
                .map(user -> {
                    user.setFirstName(updatedUser.getFirstName());
                    user.setLastName(updatedUser.getLastName());
                    user.setDob(updatedUser.getDob());
                    user.setWeight(updatedUser.getWeight());
                    user.setChronicDisease(updatedUser.getChronicDisease());
                    user.setPhoneNumber(updatedUser.getPhoneNumber());
                    user.setStreetName(updatedUser.getStreetName());
                    user.setDoorNumber(updatedUser.getDoorNumber());
                    user.setCity(updatedUser.getCity());
                    user.setZipCode(updatedUser.getZipCode());
                    user.setRegion(updatedUser.getRegion());
                    user.setCountry(updatedUser.getCountry());
                    return userRepository.save(user);
                }).get();
    }

    @Override
    public boolean deleteUser(String email) {
        var success = true;
        try {
            userRepository.deleteById(email);
        } catch (IllegalArgumentException e) {
            success = false;
        }
        return success;
    }
}
