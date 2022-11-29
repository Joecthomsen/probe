package com.probe.probe_springboot.model.UserPreferences;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "choicee")
public class Choicee {

    @Id
    @Column(name = "id", nullable = false)
    private String id;

    private String text;

    private String typeId;
}
