package com.probe.probe_springboot.model.UserPreferences;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
public class UserSettings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    private String ownerMail;  // a foreign key
    private boolean active;  // could be changed to status and use an enum instead

    @OneToMany(mappedBy = "id")
    private List<PrefChoicePair> prefsAndChoices;

    public UserSettings(String ownerMail, List<PrefChoicePair> prefChoicePairs, boolean b) {

    }

    public UserSettings() {

    }
}
