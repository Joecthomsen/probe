package com.probe.probe_springboot.repositories;

import com.probe.probe_springboot.model.EditTrial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EditTrialRepository extends JpaRepository<EditTrial, Integer> {

    List<EditTrial> findByOwnerID(String ownerID);

    @Query(value = "SELECT participantsID FROM EditTrial_participantsID WHERE EditTrial_id=?1", nativeQuery = true)
    List<Integer> findParticipants(Integer editTrialID);
}
