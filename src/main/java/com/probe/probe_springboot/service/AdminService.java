package com.probe.probe_springboot.service;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;

import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import com.probe.probe_springboot.model.Admin;

public interface AdminService {
    public Admin findAdminByUsername(String username);

    public Admin authenticate(String username, String password) throws NotFoundException, NotAuthorizedException;

    public Admin addAdmin(Admin admin);
}