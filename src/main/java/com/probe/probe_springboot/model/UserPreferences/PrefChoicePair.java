package com.probe.probe_springboot.model.UserPreferences;

import javax.persistence.*;

@Entity
@Table(name = "pref_choice_pair")
public class PrefChoicePair {
    @Id
    @Column(name = "id", nullable = false)
    private String id;

    @ManyToOne
    @JoinColumn(name = "pref_id")
    private Pref pref;

    @ManyToOne
    @JoinColumn(name = "choice_id")
    private Choicee choice;

    @ManyToOne
    @JoinColumn(name = "user_settings_id")
    private UserSettings userSettings;

    public Choicee getChoice() {
        return choice;
    }

    public void setChoice(Choicee choice) {
        this.choice = choice;
    }

    public Pref getPref() {
        return pref;
    }

    public void setPref(Pref pref) {
        this.pref = pref;
    }

    public UserSettings getUserSettings() {
        return userSettings;
    }

    public void setUserSettings(UserSettings userSettings) {
        this.userSettings = userSettings;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
