package com.probe.probe_springboot.repositories.UserPreferences;
import com.probe.probe_springboot.model.UserPreferences.AUserPreference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;

public interface AUserPreferenceRepository extends JpaRepository<AUserPreference, String> {

    AUserPreference findByID(@NonNull Long ID);

}
