package com.probe.probe_springboot.Service;

import com.probe.probe_springboot.model.UserPreferences.Choicee;
import com.probe.probe_springboot.model.UserPreferences.Pref;
import com.probe.probe_springboot.repositories.UserPreferences.ChoiceRepository;
import com.probe.probe_springboot.repositories.UserPreferences.PrefRepository;
import com.probe.probe_springboot.service.PrefAndChoiceService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.actuate.metrics.AutoConfigureMetrics;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;


@DataJpaTest
@AutoConfigureMetrics
@ActiveProfiles("test")

public class PrefAndChoiceServiceTest {

    @Mock
    private static PrefRepository prefRepository;
    @Mock
    private static ChoiceRepository choiceRepository;
    @InjectMocks
    private static PrefAndChoiceService prefAndChoiceService;


    @Test
    public void Adding_pref_returns_a_pref() {
        Pref pref = new Pref("I am a pref", "iAmChoiceType");

        given(prefRepository.save(pref)).willReturn(pref);
        Pref addedPref = prefAndChoiceService.AddPref(pref);

        assertThat(addedPref).isNotNull();
    }

}
