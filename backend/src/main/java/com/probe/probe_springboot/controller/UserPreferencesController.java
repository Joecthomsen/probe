package com.probe.probe_springboot.controller;

import com.probe.probe_springboot.model.UserPreferences.AUserPreference;
import com.probe.probe_springboot.model.UserPreferences.UserPreferencesModel;
import com.probe.probe_springboot.service.UserPreferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/userPreferences" )
public class UserPreferencesController {


    @Autowired
    UserPreferenceService userPreferenceService;

    @GetMapping("/getByOwnerMail/{ownerMail}")
    public List<AUserPreference> getPreferences(@PathVariable String ownerMail){
        return userPreferenceService.getUsersPreferencesByOwnersMail(ownerMail);
    }

    @GetMapping("/getByOwnID/{ID}")
    public List<AUserPreference> getPreferences(@PathVariable Long ID){
        return userPreferenceService.getUserPreferencesByOwnID(ID);
    }


    @PostMapping("/add")
    public UserPreferencesModel createPreferencesForOwner (@RequestBody List<AUserPreference> preferences, String ownerMail ){
        return userPreferenceService.addUserPreferencesToOwnerMail(ownerMail, preferences);
    }

    @DeleteMapping("/delete/{ID}")
    public String deleteByID(@PathVariable Long ID){
        return userPreferenceService.deleteById(ID);
    }

    @PutMapping("/put")
    public UserPreferencesModel putTrial(@RequestBody UserPreferencesModel userPreferencesModel){
        return userPreferenceService.updateUserPreferences(userPreferencesModel);
    }


}

