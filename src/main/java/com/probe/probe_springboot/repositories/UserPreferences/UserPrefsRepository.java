package com.probe.probe_springboot.repositories.UserPreferences;
import com.probe.probe_springboot.model.UserPreferences.UserPrefs;
import com.probe.probe_springboot.model.UserPreferences.UserSettings;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserPrefsRepository extends JpaRepository<UserPrefs, Long> {

    List<UserPrefs> findAllByUserSettings(UserSettings userSettings);
}
