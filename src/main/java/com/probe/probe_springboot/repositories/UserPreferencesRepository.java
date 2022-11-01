package com.probe.probe_springboot.repositories;
import com.probe.probe_springboot.model.UserPreferencesModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserPreferencesRepository extends JpaRepository<UserPreferencesModel, String> {
    UserPreferencesModel findPreferenceByID(Long ID);

}
