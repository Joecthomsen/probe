package com.probe.probe_springboot.model.UserPreferences;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class AUserPreference {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID;
    private String preferenceName;
    private String choice;
}
