package com.probe.probe_springboot.controller;
import com.probe.probe_springboot.model.UserPreferences.UserPrefs;
import com.probe.probe_springboot.model.UserPreferences.UserSettings;
import com.probe.probe_springboot.service.UserSettings.PrefAndChoiceService;
import com.probe.probe_springboot.service.UserSettings.UserSettingsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/userSettings" )
public class UserSettingsController {

    private final UserSettingsService userSettingsService;
    private final PrefAndChoiceService prefAndChoiceService;

    public UserSettingsController(UserSettingsService userSettingsService, PrefAndChoiceService prefAndChoiceService) {
        this.userSettingsService = userSettingsService;
        this.prefAndChoiceService = prefAndChoiceService;
    }

    @GetMapping("/getAll")
    public List<UserSettings> GetAllUserSettings(){
        return userSettingsService.getAll();
    }

    @GetMapping("/getById/{id}")
    public UserSettings GetUSersPrefChoicesById(@PathVariable Long id) {
        return userSettingsService.getUserSettingsByOwnID(id);
    }

    @GetMapping("/getSettingsByOwnerMail/{ownerMail}")
    public UserSettings GetUSersSettingsByOwnerMail(@PathVariable String ownerMail) {
        return userSettingsService.getUsersSetttingsByOwnersMail(ownerMail);
    }

    @GetMapping("/getUserPrefsByOwnerMail/{ownerMail}")
    public List<UserPrefs> GetUSersPrefByOwnerMail(@PathVariable String ownerMail) {
        UserSettings ownerBySettings = userSettingsService.getUsersSetttingsByOwnersMail(ownerMail);
        return prefAndChoiceService.FindUsersPrefsByUserSettings(ownerBySettings);
    }



    @PostMapping("/createUserSettings")
    public UserSettings CreateNewUserSettings(@RequestBody UserSettings userSettings) {
        return userSettingsService.saveUserSettings(userSettings);
    }

    @DeleteMapping("/deleteUserSettings/{id}")
    public String DeleteUserSettingsById(@PathVariable Long id) {
        return userSettingsService.deleteById(id);
    }

    @PutMapping("/updateUserState")
    public UserSettings UpdateUserSettings(@RequestBody UserSettings userSettings) {
        return userSettingsService.updateUserSettings(userSettings);
    }
}
