package com.probe.probe_springboot.service;


import com.probe.probe_springboot.model.UserPreferences.UserSettings;
import com.probe.probe_springboot.repositories.UserPreferences.UserSettingsRepository;
import org.springframework.stereotype.Service;

@Service
public class UserPrefChoiceService {
    private final UserSettingsRepository userSettingsRepository;

    public UserPrefChoiceService(UserSettingsRepository userSettingsRepository) {
        this.userSettingsRepository = userSettingsRepository;
    }

    public UserSettings getById(String id) {
        return userSettingsRepository.getReferenceById(id);
    }

    public UserSettings getByOwnerMail(String ownerMail) {
        return userSettingsRepository.findByOwnerMail(ownerMail);
    }


}
