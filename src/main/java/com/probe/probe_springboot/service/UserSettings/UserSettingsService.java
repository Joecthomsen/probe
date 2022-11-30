package com.probe.probe_springboot.service.UserSettings;

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

    public UserSettings getUserSettingsByOwnID(Long id) {
        return userSettingsRepository.findById(id).orElse(null);
    }

    public UserSettings getUsersSetttingsByOwnersMail(String ownerMail) {
        return userSettingsRepository.findByOwnerMail(ownerMail);
    }

    public UserSettings addUserPreferencesToOwnerMail( String ownerMail, boolean active) {
        UserSettings newModel = new UserSettings(ownerMail, active);
        try {
            return saveUserSettings(newModel);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public String deleteById(Long id) {

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
            throw new RuntimeException("Unable to get all");
        }
    }
}

