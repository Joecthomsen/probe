package com.probe.probe_springboot.controller;

import com.probe.probe_springboot.model.EditTrial;
import com.probe.probe_springboot.service.ViewTrialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/viewTrials" )
public class ViewTrialController {

    @Autowired
    ViewTrialService viewTrialService;

    @GetMapping("/getAll")
    public List<EditTrial> getAll(){
        return viewTrialService.viewTrials();
    }

    @PutMapping("/participate")
    public ParticipateTrial putTrial(@RequestBody EditTrial editTrial){
        return editTrialService.updateEditTrial(editTrial);
    }
}

