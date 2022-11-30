package com.probe.probe_springboot.model.UserPreferences;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UserPrefs {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_settings_id")
    private UserSettings userSettings;

    @ManyToOne
    @JoinColumn(name = "pref_id")
    private Pref pref;

    @ManyToOne
    @JoinColumn(name = "choicee_id")
    private Choicee choicee;

    public UserPrefs(UserSettings userSettings, Pref pref, Choicee choicee) {
        this.userSettings = userSettings;
        this.pref = pref;
        this.choicee = choicee;
    }


}
