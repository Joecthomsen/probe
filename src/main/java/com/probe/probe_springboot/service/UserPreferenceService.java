package com.probe.probe_springboot.service;

import com.probe.probe_springboot.model.UserPreferences.AUserPreference;
import com.probe.probe_springboot.model.UserPreferences.UserPreferencesModel;
import com.probe.probe_springboot.repositories.UserPreferences.UserPreferencesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserPreferenceService {


    private final UserPreferencesRepository userPreferencesRepository;
    public UserPreferenceService(UserPreferencesRepository userPreferencesRepository) {
        this.userPreferencesRepository = userPreferencesRepository;
    }

    public UserPreferencesModel saveUserPreferences(UserPreferencesModel userPreferencesModel) {
        try {
            return userPreferencesRepository.save(userPreferencesModel);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public List<AUserPreference> getUserPreferencesByOwnID(Long ID) {
        return userPreferencesRepository.findByID(ID).getMyPreferences();
    }

    public List<AUserPreference> getUsersPreferencesByOwnersMail(String ownerMail) {
        return userPreferencesRepository.findByOwnerMail(ownerMail).getMyPreferences();
    }

    public UserPreferencesModel addUserPreferencesToOwnerMail( String ownerMail, List<AUserPreference> preferences) {
        UserPreferencesModel newModel = new UserPreferencesModel(ownerMail, preferences, true);
        try {
            return saveUserPreferences(newModel);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public String deleteById(Long ID) {

        try {
            userPreferencesRepository.deleteById(ID.toString());
            return "deleted" + ID;

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Unable to delete");
        }
    }
    public UserPreferencesModel updateUserPreferences(UserPreferencesModel userPreferencesModel) {
        if (userPreferencesRepository.findByID(userPreferencesModel.getID()) != null) {
            return userPreferencesRepository.save(userPreferencesModel);
        }
        else throw new RuntimeException("UserPreference not found");
    }
}

