package com.probe.probe_springboot.model.UserPreferences;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "pref")
public class Pref {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String text;

    private String choiceTypeId;

    public Pref(String text, String choiceTypeId){
        this.text = text;
        this.choiceTypeId = choiceTypeId;
    }


    public Pref() {

    }
}
