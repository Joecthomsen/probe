package com.probe.probe_springboot.service;

import com.probe.probe_springboot.model.Role;
import com.probe.probe_springboot.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    Role saveRole(Role role);

    void addRoleToUser(String email, String roleName);

    // User getUserById(String email);
    User findByEmail(String email);

    List<User> getUsers();

    User updateUser(User user, String id);

    User findById(String id);
}
