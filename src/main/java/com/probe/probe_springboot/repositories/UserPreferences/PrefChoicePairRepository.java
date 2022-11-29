package com.probe.probe_springboot.repositories.UserPreferences;

import com.probe.probe_springboot.model.UserPreferences.Pref;
import com.probe.probe_springboot.model.UserPreferences.PrefChoicePair;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrefChoicePairRepository extends JpaRepository<PrefChoicePair, String> {

}
