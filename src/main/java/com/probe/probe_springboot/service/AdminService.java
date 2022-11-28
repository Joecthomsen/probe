package com.probe.probe_springboot.service;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import com.probe.probe_springboot.model.Admin;

public interface AdminService {
    public Admin findAdminByUsername(String username);

    public String authenticate(String username, String password)
            throws NotFoundException, NotAuthorizedException, JsonProcessingException;

    public Admin addAdmin(Admin admin);
}