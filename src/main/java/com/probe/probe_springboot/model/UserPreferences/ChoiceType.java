package com.probe.probe_springboot.model.UserPreferences;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class ChoiceType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    String type;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "choice_type_choices",
            joinColumns = @JoinColumn(name = "choice_type_type", referencedColumnName = "choices_id"))

    List<Choice> choices;

}
