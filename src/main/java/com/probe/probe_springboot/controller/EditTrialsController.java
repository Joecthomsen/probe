package com.probe.probe_springboot.controller;

import com.probe.probe_springboot.model.EditTrial;
import com.probe.probe_springboot.service.EditTrialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/editTrial" )
public class EditTrialsController {

    @Autowired
    EditTrialService editTrialService;

    @GetMapping("/get{id}")
    public EditTrial getAllUsers(@PathVariable Integer id){
        return editTrialService.getEditTrial(id);
    }

    @GetMapping("/getByOwnerID{ownerID}")
    public List<EditTrial> getEditTrialsByOwnerID(@PathVariable Integer ownerID){
        return editTrialService.getEditTrialByOwnerID(ownerID);
    }

    @PostMapping("/add")
    public EditTrial saveEditTrial(@RequestBody EditTrial editTrial){
        return editTrialService.saveEditTrial(editTrial);
    }

    @DeleteMapping("/delete{id}")
    public String deleteByID(@PathVariable Integer id){
        return editTrialService.deleteEditTrialByID(id);
    }

    @PutMapping("/put")
    public EditTrial putTrial(@RequestBody EditTrial editTrial){
        return editTrialService.updateEditTrial(editTrial);
    }
}

