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
@Table(name = "USERPREFERENCES")
public class UserPreferencesModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID;
    private String ownerMail;  // a foreign key
    private boolean active;  // could be changed to status and use an enum instead
    @ManyToMany(fetch = FetchType.EAGER)
    private List<AUserPreference> myPreferences = new java.util.ArrayList<>();

    public UserPreferencesModel(String ownerMail, List<AUserPreference> preferences, boolean active) {
        this.ownerMail = ownerMail;
        this.myPreferences = preferences;
        this.active = active;
    }

}



