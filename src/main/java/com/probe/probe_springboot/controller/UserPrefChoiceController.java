package com.probe.probe_springboot.controller;


import com.probe.probe_springboot.model.UserPreferences.UserSettings;
import com.probe.probe_springboot.service.UserPrefChoiceService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/userPrefChoice" )
public class UserPrefChoiceController {

    private final UserPrefChoiceService userPrefChoiceService;

    public UserPrefChoiceController(UserPrefChoiceService userPrefChoiceService) {
        this.userPrefChoiceService = userPrefChoiceService;
    }


    @GetMapping("/getById/{id}")
    public UserSettings GetUSersPrefChoicesById(@PathVariable String id) {
        return userPrefChoiceService.getById(id);
    }

    @GetMapping("/getByOwnerMail/{id}")
    public UserSettings GetUSersPrefChoicesByOwnerMail(@PathVariable String ownerMail) {
        return userPrefChoiceService.getByOwnerMail(ownerMail);
    }




}
