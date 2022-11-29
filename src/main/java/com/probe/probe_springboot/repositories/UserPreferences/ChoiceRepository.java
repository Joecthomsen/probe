package com.probe.probe_springboot.repositories.UserPreferences;

import com.probe.probe_springboot.model.UserPreferences.Choicee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.*;

public interface ChoiceRepository extends JpaRepository<Choicee, String> {

}
