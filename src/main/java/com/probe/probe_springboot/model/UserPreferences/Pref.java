package com.probe.probe_springboot.model.UserPreferences;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Pref {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    String id;
    String text;
    String choiceType;  // This is a key to another table to get list of choices
}
