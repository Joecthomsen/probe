package com.probe.probe_springboot.repositories;

import com.probe.probe_springboot.model.EditTrial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EditTrialRepository extends JpaRepository<EditTrial, Integer> {

    List<EditTrial> findByOwnerID(Integer ownerID);
}
