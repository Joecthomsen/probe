package com.probe.probe_springboot.controller;


import com.probe.probe_springboot.model.UserPreferences.UserSettings;
import com.probe.probe_springboot.service.UserSettingsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/userSettings" )
public class UserSettingsController {

    private final UserSettingsService userSettingsService;

    public UserSettingsController(UserSettingsService userSettingsService) {
        this.userSettingsService = userSettingsService;
    }

    @GetMapping("/getAll")
    public List<UserSettings> GetAllUserSettings(){
        return userSettingsService.getAll();
    }

    @GetMapping("/getById/{id}")
    public UserSettings GetUSersPrefChoicesById(@PathVariable String id) {
        return userSettingsService.getUserSettingsByOwnID(id);
    }

    @GetMapping("/getByOwnerMail/{ownerMail}")
    public UserSettings GetUSersPrefChoicesByOwnerMail(@PathVariable String ownerMail) {
        return userSettingsService.getUsersSetttingsByOwnersMail(ownerMail);
    }

    @PostMapping("/createUserSettings")
    public UserSettings CreateNewUserSettings(@RequestBody UserSettings userSettings) {
        return userSettingsService.saveUserSettings(userSettings);
    }

    @DeleteMapping("/deleteUserSettings/{id}")
    public String DeleteUserSettingsById(@PathVariable String id) {
        return userSettingsService.deleteById(id);
    }

    @PutMapping("/updateUserState")
    public UserSettings UpdateUserSettings(@RequestBody UserSettings userSettings) {
        return userSettingsService.updateUserSettings(userSettings);
    }
}
