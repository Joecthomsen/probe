package com.probe.probe_springboot.model.UserPreferences;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UserSettings {
    @Id
    private String id;
    @NotNull
    private String ownerMail;  // a foreign key
    private boolean active;  // could be changed to status and use an enum instead for more posibilities
    @ElementCollection
    private List<String> prefAndChoicePairId;

}
