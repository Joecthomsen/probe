package com.probe.probe_springboot.repositories.UserPreferences;

import com.probe.probe_springboot.model.UserPreferences.Choicee;
import com.probe.probe_springboot.model.UserPreferences.Pref;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrefRepository extends JpaRepository<Pref, String> {

}
