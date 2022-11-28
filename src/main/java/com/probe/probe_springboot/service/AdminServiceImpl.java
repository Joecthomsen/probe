package com.probe.probe_springboot.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.probe.probe_springboot.authentication.JWTHandler;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import com.probe.probe_springboot.model.Admin;
import com.probe.probe_springboot.repositories.AdminRepository;

import org.apache.tomcat.util.log.SystemLogHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;
    private JWTHandler jwtHandler = new JWTHandler();

    @Override
    public String authenticate(String username, String password)
            throws NotFoundException, NotAuthorizedException, JsonProcessingException {
        var admin = findAdminByUsername(username);
        if (admin == null) {
            // TODO: Log
            throw new NotFoundException();
        }
        if (!BCrypt.checkpw(password, admin.getPassword())) {
            throw new NotAuthorizedException("user not authorized");
        }
        return JWTHandler.generateAdminToken(admin);
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
