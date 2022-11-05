package com.probe.probe_springboot.model.UserPreferences;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "UserPreferences")
public class UserPreferencesModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID;
    private String ownerMail;  // a foreign key

    @OneToMany
    private List<AUserPreference> myPreferences;

    public UserPreferencesModel(String ownerMail, List<AUserPreference> preferences) {
        this.ownerMail = ownerMail;
        this.myPreferences = preferences;
    }

}



