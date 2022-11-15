package com.probe.probe_springboot.Service;

import com.probe.probe_springboot.model.UserPreferences.AUserPreference;
import com.probe.probe_springboot.model.UserPreferences.UserPreferencesModel;
import com.probe.probe_springboot.repositories.UserPreferences.AUserPreferenceRepository;
import com.probe.probe_springboot.repositories.UserPreferences.UserPreferencesRepository;
import com.probe.probe_springboot.service.UserPreferenceService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;


import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;


@DataJpaTest
@ActiveProfiles("test")
public class UserPreferencesServiceTest {

    @Mock
    private UserPreferencesRepository userPreferencesRepository;

    @Mock
    private AUserPreferenceRepository aUserPreferenceRepository;

    @InjectMocks
    private UserPreferenceService userPrefService;

    private UserPreferencesModel CreateASingleUserPreferences() {

        String ownerMail = "a@b.dk";
        List<AUserPreference> list = new ArrayList<>();

        for (long i = 1; i < 5; i++) {
            AUserPreference aUserPreference = new AUserPreference(null,"pref" + i, "choice" + i);
            AUserPreference savedUserPreference = aUserPreferenceRepository.save(aUserPreference);
            list.add(savedUserPreference);
        }

        return new UserPreferencesModel(ownerMail, list, true);
    }


    @DisplayName("UserPreference Service saves correctly")
    @Test
    public void shouldCreateNewUserPref() {
        UserPreferencesModel userPrefModel = CreateASingleUserPreferences();
        given(userPreferencesRepository.save(userPrefModel)).willReturn(userPrefModel);

        UserPreferencesModel savedUserPrefModel = userPrefService.saveUserPreferences(userPrefModel);

        assertThat(savedUserPrefModel).isNotNull();
        assertThat(savedUserPrefModel).isEqualTo(userPrefModel);
    }

}
