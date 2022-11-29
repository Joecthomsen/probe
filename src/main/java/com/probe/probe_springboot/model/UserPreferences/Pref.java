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
@Table(name = "pref")
public class Pref {
    @Id
    @Column(name = "id", nullable = false)

    private String id;
    private String text;
    private String choiceTypeId;


}
