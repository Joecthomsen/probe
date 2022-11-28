package com.probe.probe_springboot.controller;


import com.probe.probe_springboot.model.UserPreferences.UserSettings;
import com.probe.probe_springboot.service.UserSettingsService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/userPrefChoice" )
public class UserSettingsController {

    private final UserSettingsService userSettingsService;

    public UserSettingsController(UserSettingsService userSettingsService) {
        this.userSettingsService = userSettingsService;
    }


    @GetMapping("/getById/{id}")
    public UserSettings GetUSersPrefChoicesById(@PathVariable String id) {
        return userSettingsService.getUserSettingsByOwnID(id);
    }

    @GetMapping("/getByOwnerMail/{ownerMail}")
    public UserSettings GetUSersPrefChoicesByOwnerMail(@PathVariable String ownerMail) {
        return userSettingsService.getUsersSetttingsByOwnersMail(ownerMail);
    }




}
