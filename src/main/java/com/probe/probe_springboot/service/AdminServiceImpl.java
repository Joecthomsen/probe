package com.probe.probe_springboot.service;

import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import com.probe.probe_springboot.model.Admin;
import com.probe.probe_springboot.repositories.AdminRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public Admin authenticate(String username, String password) throws NotFoundException, NotAuthorizedException {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        password = passwordEncoder.encode(password);

        var admin = findAdminByUsername(username);
        if (admin == null) {
            // TODO: Log
            throw new NotFoundException();
        }

        if (!passwordEncoder.matches(admin.getPassword(), password)) {
            // TODO: Log
            throw new NotAuthorizedException("username: " + username + ", attempts: " + "");
        }
        return admin;
    }

    @Override
    public Admin findAdminByUsername(String username) {
        return adminRepository.findAdminByUsername(username);
    }

    @Override
    public Admin addAdmin(Admin admin) {
        return adminRepository.save(admin);
    }
}
