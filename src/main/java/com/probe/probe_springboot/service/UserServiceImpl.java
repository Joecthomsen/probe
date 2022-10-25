package com.probe.probe_springboot.service;

import com.probe.probe_springboot.exceptions.UserAlreadyExists;
import com.probe.probe_springboot.exceptions.UserNotFound;
import com.probe.probe_springboot.model.Role;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.repositories.RoleRepository;
import com.probe.probe_springboot.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User saveUser(User user) throws UserAlreadyExists {

        User userTest = userRepository.findByEmail(user.getEmail());
        if(userTest == null) {
            return userRepository.save(user);
        }
        throw new UserAlreadyExists("User with email " + user.getEmail() + " already exists");
    }

    @Override
    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(Long userId, String roleName) {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFound("User with id " + userId + " not found!"));
        Role role = roleRepository.findByRoleName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow( () -> new UserNotFound("User with id " + id + " not found!"));
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public List<Role> getAllRoles(){
        return roleRepository.findAll();
    }
}
