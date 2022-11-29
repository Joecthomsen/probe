package com.probe.probe_springboot.model.UserPreferences;

import lombok.Getter;
import lombok.Setter;
import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "pref_choice_pair")
public class PrefChoicePair {

    @Id
    @Column(name = "id", nullable = false)
    private String id;

    private String prefId;

    private String choiceId;

}
