package com.probe.probe_springboot.model.UserPreferences;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class PrefChoicePair {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private String id;

    @ManyToOne
    @JoinColumn(name = "pref_id")
    private Pref pref;
    @ManyToOne
    @JoinColumn(name = "choice_id")
    private Choice choice;

    @ManyToOne
    @JoinColumn(name = "prefsAndChoices")
    private UserSettings userSettings;

}
