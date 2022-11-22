package com.probe.probe_springboot.service;

import com.probe.probe_springboot.exceptions.EditTrials.*;
import com.probe.probe_springboot.model.EditTrial;
import com.probe.probe_springboot.repositories.EditTrialRepository;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EditTrialService {
    //@Autowired
    //MeterRegistry meterRegistry;
    //Meter Prometheus commented out, because tests failed

    @Autowired
    private EditTrialRepository editTrialRepository;

    public EditTrial saveEditTrial(EditTrial editTrial) {

        try {
            //meterRegistry.counter("total_upload_trial_attempts").increment();
            return editTrialRepository.save(editTrial);
        } catch (Exception e) {
            e.printStackTrace();
            throw new NotATrial("POST statement does not have a trial.");
        }
    }

    public EditTrial getEditTrial(Integer id) {
        EditTrial editTrial = editTrialRepository.findById(id).orElseThrow(() -> new TrialIdNotFound("Trail with id: " + id + " was not found."));

        editTrial.setParticipantsID(editTrialRepository.findParticipants(editTrial.getId()));

        return editTrial;
    }

    public String deleteEditTrialByID(Integer id) {
        try {
            editTrialRepository.deleteById(id);
            //meterRegistry.counter("total_trials_deleted").increment();
            return "Deleted: " + id;
        } catch (Exception e) {
            e.printStackTrace();
            throw new TrialIdNotFound("Trial with id: " + id + " was not found.");
        }
    }

    public EditTrial updateEditTrial(EditTrial editTrial) {
        if (editTrialRepository.findById(editTrial.getId()).isPresent()) {
            //meterRegistry.counter("total_update_trial_attempts").increment();
            return editTrialRepository.save(editTrial);
        } else {
            throw new TriaINotFound("Trial not found.");
        }
    }

    public List<EditTrial> getEditTrialByOwnerID(String ownerID) {
        List<EditTrial> list = editTrialRepository.findByOwnerID(ownerID);
        //meterRegistry.counter("total_getTrials_attempts_from_" + ownerID).increment();
        //meterRegistry.counter("total_getTrialsByOwnerid_attempt").increment();
        if (list.isEmpty()) {
            return null;
            //throw new OwnerIDNotFound("OwnerID: " + ownerID + " not found.");
        }
        for (EditTrial editTrial : list) {
            try {
                editTrial.setParticipantsID(editTrialRepository.findParticipants(editTrial.getId()));
            } catch (Exception e) {
                e.printStackTrace();
                throw new DatabaseErrorGettingParticipants("Error getting participants from database belonging to trial ID: " + editTrial.getId());
            }
        }
        return list;
    }


}
