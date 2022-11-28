package com.probe.probe_springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.probe.probe_springboot.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {
    public Admin findAdminByUsername(String username);
}
