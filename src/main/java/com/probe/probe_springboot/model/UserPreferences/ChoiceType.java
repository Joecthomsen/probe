package com.probe.probe_springboot.model.UserPreferences;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "choice_type")
public class ChoiceType {
    @Id
    @Column(name = "id", nullable = false)
    private String id;

    @ElementCollection
    private List<String> possibleChoicesId;

}
