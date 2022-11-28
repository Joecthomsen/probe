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

    public UserSettings addUserPreferencesToOwnerMail( String ownerMail, List<PrefChoicePair> prefChoicePairs) {
        UserSettings newModel = new UserSettings(ownerMail, prefChoicePairs, true);
        try {
            return saveUserSettings(newModel);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public String deleteById(Long ID) {

        try {
            userSettingsRepository.deleteById(ID.toString());
            return "deleted" + ID;

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Unable to delete");
        }
    }
    public UserSettings updateUserPreferences(UserSettings userPreferencesModel) {
        if (userSettingsRepository.findById(userPreferencesModel.getId()) != null) {
            return userSettingsRepository.save(userPreferencesModel);
        }
        else throw new RuntimeException("UserPreference not found");
    }
}

