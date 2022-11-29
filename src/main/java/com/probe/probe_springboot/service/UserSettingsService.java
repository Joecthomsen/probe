package com.probe.probe_springboot.service;

import com.probe.probe_springboot.model.UserPreferences.PrefChoicePair;
import com.probe.probe_springboot.model.UserPreferences.UserSettings;
import com.probe.probe_springboot.repositories.UserPreferences.UserSettingsRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserSettingsService {

    private final UserSettingsRepository userSettingsRepository;
    public UserSettingsService(UserSettingsRepository userSettingsRepository) {
        this.userSettingsRepository = userSettingsRepository;
    }

    public UserSettings saveUserSettings(UserSettings userSettings) {
        try {
            return userSettingsRepository.save(userSettings);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public UserSettings getUserSettingsByOwnID(String id) {
        return userSettingsRepository.findById(id).get();
    }

    public UserSettings getUsersSetttingsByOwnersMail(String ownerMail) {
        return userSettingsRepository.findByOwnerMail(ownerMail);
    }

    public UserSettings addUserPreferencesToOwnerMail( String ownerMail, List<String> prefChoicePairIds) {
        UserSettings newModel = new UserSettings(null, ownerMail,true, prefChoicePairIds);
        try {
            return saveUserSettings(newModel);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public String deleteById(String id) {

        try {
            userSettingsRepository.deleteById(id);
            return "deleted" + id;

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Unable to delete");
        }
    }
    public UserSettings updateUserSettings(UserSettings userSettings) {
        if (userSettingsRepository.findById(userSettings.getId()) != null) {
            return userSettingsRepository.save(userSettings);
        }
        else throw new RuntimeException("UserSettings not found");
    }

    public List<UserSettings> getAll() {
        try {
            return userSettingsRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Unable to delete");
        }
    }
}

