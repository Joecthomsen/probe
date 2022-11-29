package com.probe.probe_springboot.model.UserPreferences;

import com.sun.istack.NotNull;
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
    @NotNull
    private String ownerMail;  // a foreign key
    private boolean active;  // could be changed to status and use an enum instead

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "userSettings")
    private List<PrefChoicePair> prefsAndChoices = new java.util.ArrayList<>();

    public UserSettings(String ownerMail, List<PrefChoicePair> prefChoicePairs, boolean b) {
        this.ownerMail = ownerMail;
        this.prefsAndChoices = prefChoicePairs;
        this.active = b;
    }

    public UserSettings() {

    }
}
