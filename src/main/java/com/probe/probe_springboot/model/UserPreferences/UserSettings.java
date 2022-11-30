package com.probe.probe_springboot.model.UserPreferences;

import com.sun.istack.NotNull;
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
public class UserSettings {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull
    @Column(unique = true)
    private String ownerMail;  // a foreign key
    private boolean active;  // could be changed to status and use an enum instead for more posibilities

    public UserSettings(String ownerMail, boolean active) {
        this.ownerMail = ownerMail;
        this.active = active;
    }

}
