package com.probe.probe_springboot.Service;

import com.probe.probe_springboot.model.EditTrial;
import com.probe.probe_springboot.repositories.EditTrialRepository;
import com.probe.probe_springboot.service.EditTrialService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.*;
import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;


@DataJpaTest
@ActiveProfiles("test")
public class EditTrialServiceTest {

    @Mock
    private EditTrialRepository editTrialRepository;

    @InjectMocks
    private EditTrialService ets;

    private EditTrial makeET() {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        return new EditTrial(null, "header", "Title", 0, 1, "Streetname", "Doornumber", "ZipCode", "City", "Region", "Country", "cardDescription", "longDescription", "Vek", "date", "requiredvisits", "starttime", 12, list, "1");
    }

    @DisplayName("EditTrial Service save method test")
    @Test
    public void shouldInsertTrial() {
        EditTrial et = makeET();
        given(editTrialRepository.save(et)).willReturn(et);

        EditTrial dbet = ets.saveEditTrial(et);

        assertThat(dbet).isNotNull();
        assertThat(dbet).isEqualTo(et);
    }


    @DisplayName("EditTrial Service shouldGetTrial method test")
    @Test
    public void shouldGetTrial() {
        EditTrial et = makeET();
        given(editTrialRepository.findById(1)).willReturn(java.util.Optional.of(et));

        EditTrial dbet = ets.getEditTrial(1);

        assertThat(dbet).isNotNull();
        assertThat(dbet).isEqualTo(et);
    }


    @DisplayName("EditTrial Service shouldGetTrial(id Not found) method test")
    @Test
    public void shouldReturnNull_GetTrial() {
        given(editTrialRepository.findById(1)).willReturn(Optional.empty());

        EditTrial dbet = ets.getEditTrial(1);

        assertThat(dbet).isNull();
    }

    @DisplayName("EditTrial Service shouldReturnTrialsByOwnerID method test")
    @Test
    public void shouldReturnTrialsByOwnerID() {
        EditTrial et1 = makeET();
        EditTrial et2 = makeET();
        EditTrial et3 = makeET();
        given(editTrialRepository.findByOwnerID(12)).willReturn(List.of(et1,et2,et3));

        List<EditTrial> list= ets.getEditTrialByOwnerID(12);

        assertThat(list).isNotNull();
        assertThat(list.size()).isEqualTo(3);
    }

    @DisplayName("EditTrial Service shouldReturnTrialsByOwnerID(OwnerID Not Found) method test")
    @Test
    public void shouldReturnNull_TrialsByOwnerID() {
        given(editTrialRepository.findByOwnerID(12)).willReturn(Collections.emptyList());

        List<EditTrial> list= ets.getEditTrialByOwnerID(12);

        assertThat(list).isEmpty();
    }

    @DisplayName("EditTrial Service deleteEditTrialByID method test")
    @Test
    public void shouldDeleteTrialByID() {
        EditTrial et = makeET();
        et.setId(1);
        //Make condition do nothing.
        willDoNothing().given(editTrialRepository).deleteById(et.getId());

        String resp = ets.deleteEditTrialByID(et.getId());

        //Verify that repo has called deleteById with correct id 1 time.
        verify(editTrialRepository, times(1)).deleteById(et.getId());
        assertThat(resp).isEqualTo("Deleted: "+et.getId());
    }

    @DisplayName("EditTrial Service updateEditTrial(Trial is present) method test")
    @Test
    public void shouldUpdateEditTrial() {

    }

    @DisplayName("EditTrial Service updateEditTrial(Trial is not present) method test")
    @Test
    public void shouldReturnNull_UpdateEditTrial() {
    }


}
