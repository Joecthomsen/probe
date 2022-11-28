package com.probe.probe_springboot.model.UserPreferences;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "AUSERPREFERENCE")
public class AUserPreference {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID;
    private String preferenceName;
    private String choice;


}
