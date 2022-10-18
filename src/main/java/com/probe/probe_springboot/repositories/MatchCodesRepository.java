package com.probe.probe_springboot.repositories;


import com.probe.probe_springboot.model.MatchCodes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchCodesRepository extends JpaRepository<MatchCodes, Integer> {
}
