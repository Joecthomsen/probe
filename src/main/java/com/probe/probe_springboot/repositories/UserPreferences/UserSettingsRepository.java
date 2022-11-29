package com.probe.probe_springboot.repositories.UserPreferences;

import com.probe.probe_springboot.model.UserPreferences.UserSettings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserSettingsRepository extends JpaRepository<UserSettings, String> {
    UserSettings findByOwnerMail(String ownerMail);
}
