package com.probe.probe_springboot.service;

import com.probe.probe_springboot.model.Role;
import com.probe.probe_springboot.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(Long id, String roleName);
    User getUserById(Long id);
    User getUserByEmail(String email);
    List<User> getUsers();
}
