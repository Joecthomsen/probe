package com.probe.probe_springboot.repositories.UserPreferences;

import com.probe.probe_springboot.model.UserPreferences.Pref;
import com.probe.probe_springboot.model.UserPreferences.UserPrefs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserPrefsRepository extends JpaRepository<UserPrefs, Long> {

}
