package com.probe.probe_springboot.service;

import com.probe.probe_springboot.model.UserPreferences.AUserPreference;
import com.probe.probe_springboot.model.UserPreferences.UserPreferencesModel;
import com.probe.probe_springboot.repositories.UserPreferences.UserPreferencesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserPreferenceService {

    @Autowired
    private UserPreferencesRepository userPreferencesRepository;

    public UserPreferencesModel saveUserPreferences(UserPreferencesModel userPreferencesModel) {
        try {
            return userPreferencesRepository.save(userPreferencesModel);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public List<AUserPreference> getUsersPreferences(String ownerMail) {
        return userPreferencesRepository.findByOwnerMail(ownerMail).getMyPreferences();
    }
}