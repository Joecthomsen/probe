package com.probe.probe_springboot.Repository;

import com.probe.probe_springboot.model.EditTrial;
import com.probe.probe_springboot.repositories.EditTrialRepository;
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
public class EditTrialRepositoryTest {

    @Autowired
    EditTrialRepository etr;

    private EditTrial makeET(Integer id) {
        List<String> list = new ArrayList<>();
        list.add("1");
        list.add("2");
        list.add("3");
        return new EditTrial(id, "header", "Title", 0, 1, "Streetname", 1234, "City", "Country", "cardDescription", "longDescription", "Vek", "date", 2, "starttime", "12", list, "1");
    }

    @DisplayName("EditTrial Reposository save method test")
    @Test
    public void shouldInsertTrial() {
        EditTrial et = makeET(null);
        EditTrial dbet = etr.save(et);

        assertThat(dbet).usingRecursiveComparison().ignoringFields("id").isEqualTo(et);
    }

    @DisplayName("EditTrial Reposository findByID method test")
    @Test
    public void shouldGetTrial() {
        EditTrial et = makeET(null);
        //save object for automatic id.
        EditTrial dbet2 = etr.save(et);
        EditTrial dbet = etr.findById(dbet2.getId()).orElse(null);

        assertThat(dbet).isNotNull();
        assertThat(dbet).usingRecursiveComparison().ignoringFields("id").isEqualTo(et);
    }

    @DisplayName("EditTrial Reposository findByOwner method test")
    @Test
    public void shouldReturnTrialsByOwnerID() {
        EditTrial et1 = makeET(null);
        EditTrial et2 = makeET(null);
        EditTrial et3 = makeET(null);
        etr.save(et1);
        etr.save(et2);
        etr.save(et3);

        List<EditTrial> editTrialList = etr.findByOwnerID("12");

        assertThat(editTrialList.size()).isEqualTo(3);

    }

    @DisplayName("EditTrial Reposository delete method test")
    @Test
    public void shouldDeleteByID() {
        EditTrial et = makeET(null);
        //Save object for automatic id.
        EditTrial dbet = etr.save(et);


        assertThat(dbet).isNotNull();
        etr.deleteById(dbet.getId());

        assertThat(etr.findById(dbet.getId()).orElse(null)).isNull();
    }

    @DisplayName("EditTrial Reposository update method test")
    @Test
    public void shouldUpdateByID() {
        EditTrial et = makeET(null);
        //save object for automatic id.
        EditTrial dbet = etr.save(et);
        //Copy for differential check
        String dbTitle = dbet.getTitle();

        assertThat(dbet).isNotNull();
        dbet.setTitle("updated");

        EditTrial dbet2 = etr.save(dbet);

        assertThat(dbet.getId()).isEqualTo(dbet2.getId());
        assertThat(dbTitle).isNotEqualTo(dbet2.getTitle());
    }

    @DisplayName("EditTrial Reposository findParticipants method test")
    @Test
    public void nacvn (){
        EditTrial et = makeET(null);
        //save object for automatic id.
        EditTrial dbet = etr.save(et);
        List<String> list =etr.findParticipants(dbet.getId());

        assertThat(list).isNotEmpty();
        assertThat(list.size()).isEqualTo(3);
    }
}
