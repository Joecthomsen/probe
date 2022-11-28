package com.probe.probe_springboot.model.UserPreferences;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
public class Choice {
    @Id
    @Column(name = "id", nullable = false)
    private String id;

    @ManyToOne
    @JoinColumn(name = "type_type")
    private ChoiceType type;


    private String text;


}
