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
        return editTrialRepository.findById(id).orElse(null);
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
        if(editTrialRepository.findById(editTrial.getId()).isPresent()) {
            return editTrialRepository.save(editTrial);
        }else{
            return null;
        }
    }

    public List<EditTrial> getEditTrialByOwnerID(Integer ownerID) {
        return editTrialRepository.findByOwnerID(ownerID);
    }


}
