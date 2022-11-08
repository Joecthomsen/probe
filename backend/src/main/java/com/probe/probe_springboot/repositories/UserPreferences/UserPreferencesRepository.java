package com.probe.probe_springboot.repositories.UserPreferences;

import com.probe.probe_springboot.model.UserPreferences.UserPreferencesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;

public interface UserPreferencesRepository extends JpaRepository<UserPreferencesModel, String> {
    UserPreferencesModel findByID(@NonNull Long ID);
    UserPreferencesModel findByOwnerMail(@NonNull String ownerMail);







}
