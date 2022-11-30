package com.probe.probe_springboot.service.UserSettings;

import com.probe.probe_springboot.model.UserPreferences.*;
import com.probe.probe_springboot.repositories.UserPreferences.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrefAndChoiceService {

    private final ChoiceRepository choiceRepository;
    private final PrefRepository prefRepository;
    private final UserPrefsRepository userPrefsRepository;

    public PrefAndChoiceService(ChoiceRepository choiceRepository, PrefRepository prefRepository, UserPrefsRepository userPrefsRepository) {
        this.choiceRepository = choiceRepository;
        this.prefRepository = prefRepository;
        this.userPrefsRepository = userPrefsRepository;
    }

    public Choicee AddChoicee(Choicee choicee){
        try {
            return choiceRepository.save(choicee);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public Pref AddPref(Pref pref){
        try {
            return prefRepository.save(pref);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public UserPrefs AddUserPref(UserPrefs userPrefs) {
        try {
            return userPrefsRepository.save(userPrefs);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }



    public Pref GetPrefById(Long id) {
        try {
            return prefRepository.getReferenceById(id);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public List<UserPrefs> FindUsersPrefsByUserSettings(UserSettings userSettings) {
        return userPrefsRepository.findAllByUserSettings(userSettings);
    }
}

