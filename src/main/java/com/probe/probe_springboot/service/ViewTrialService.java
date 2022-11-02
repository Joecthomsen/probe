package com.probe.probe_springboot.service;

import com.probe.probe_springboot.exceptions.EditTrials.NoTrials;
import com.probe.probe_springboot.model.EditTrial;
import com.probe.probe_springboot.repositories.EditTrialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ViewTrialService {


    @Autowired
    private EditTrialRepository editTrialRepository;

    public List<EditTrial> viewTrials() {
        try {
            return editTrialRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();
            throw new NoTrials("No trials found");
        }
    }

}
