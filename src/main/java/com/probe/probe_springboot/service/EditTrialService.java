package com.probe.probe_springboot.service;

import com.probe.probe_springboot.model.EditTrial;
import com.probe.probe_springboot.repositories.EditTrialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EditTrialService {

    @Autowired
    private EditTrialRepository editTrialRepository;

    public EditTrial saveEditTrial(EditTrial editTrial) {
        return editTrialRepository.save(editTrial);
    }

    public EditTrial getEditTrial(Integer id) {
        EditTrial editTrial = editTrialRepository.findById(id).orElse(null);
        if (editTrial != null) {
            editTrial.setParticipantsID(editTrialRepository.findParticipants(editTrial.getId()));
        }
        return editTrial;
    }

    public String deleteEditTrialByID(Integer id) {
        try {
            editTrialRepository.deleteById(id);
            return "Deleted: " + id;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public EditTrial updateEditTrial(EditTrial editTrial) {
        if (editTrialRepository.findById(editTrial.getId()).isPresent()) {
            return editTrialRepository.save(editTrial);
        } else {
            return null;
        }
    }

    public List<EditTrial> getEditTrialByOwnerID(Integer ownerID) {
        List<EditTrial> list = editTrialRepository.findByOwnerID(ownerID);
        if (!list.isEmpty()){
            //For each
            for (EditTrial editTrial : list) {
                editTrial.setParticipantsID(editTrialRepository.findParticipants(editTrial.getId()));
            }
        }
        return list;
    }


}
