package com.probe.probe_springboot.service;

import com.probe.probe_springboot.exceptions.UserAlreadyExists;
import com.probe.probe_springboot.exceptions.UserNotFound;
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

        // String encodedPassword = passwordEncoder.encode(user.getPassword());
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
                .orElseThrow(() -> new UserNotFound("User with email " + userEmail + " not found!"));
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
    public User updateUser(User updatedUser, String id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setFirstName(updatedUser.getFirstName());
                    return userRepository.save(user);
                }).get();
    }

    @Override
    public User findById(String id) {
        // FIXME: Handle id does not exist
        return userRepository.findById(id).get();
    }
}
