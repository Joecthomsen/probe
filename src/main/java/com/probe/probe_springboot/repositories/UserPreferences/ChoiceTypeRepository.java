package com.probe.probe_springboot.repositories.UserPreferences;

import com.probe.probe_springboot.model.UserPreferences.ChoiceType;
import com.probe.probe_springboot.model.UserPreferences.Choicee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChoiceTypeRepository extends JpaRepository<ChoiceType, String> {

}
