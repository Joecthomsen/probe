package com.probe.probe_springboot.Repository;

import com.probe.probe_springboot.model.UserPreferences.AUserPreference;
import com.probe.probe_springboot.model.UserPreferences.UserPreferencesModel;
import com.probe.probe_springboot.repositories.UserPreferences.AUserPreferenceRepository;
import com.probe.probe_springboot.repositories.UserPreferences.UserPreferencesRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@ActiveProfiles("test")
public class UserPreferencesRepositoryTest {

    @Autowired
    UserPreferencesRepository userPreferencesRepository;

    @Autowired
    AUserPreferenceRepository aUserPreferenceRepository;

    private UserPreferencesModel CreateASingleUserPreferences() {

        String ownerMail = "a@b.dk";
        List<AUserPreference> list = new ArrayList<>();

        for (long i = 1; i < 5; i++) {
            AUserPreference aUserPreference = new AUserPreference(null,"pref" + i, "choice" + i);
            AUserPreference savedUserPreference = aUserPreferenceRepository.save(aUserPreference);
            list.add(savedUserPreference);
        }

        return new UserPreferencesModel(null, ownerMail, list);
    }

    @DisplayName("Userpreferences saves correctly")
    @Test
    public void UserPreferences_are_saved_correctly(){
        UserPreferencesModel userPrefModel = CreateASingleUserPreferences();
        UserPreferencesModel savedUserPreference = userPreferencesRepository.save(userPrefModel);

        assertThat(savedUserPreference).usingRecursiveComparison().ignoringFields("ID").isEqualTo(userPrefModel);
    }

    @DisplayName("Userpreferences are found correctly by ID")
    @Test
    public void UserPreferences_are_found_correctly_by_ID() {

        UserPreferencesModel userPrefModel = CreateASingleUserPreferences();
        UserPreferencesModel savedUserPrefModel = userPreferencesRepository.save(userPrefModel);
        Long idOfSavedUserPrefModel = savedUserPrefModel.getID();

        UserPreferencesModel foundById = userPreferencesRepository.findByID(idOfSavedUserPrefModel);

        assert(foundById.equals(userPrefModel) );
    }


}
