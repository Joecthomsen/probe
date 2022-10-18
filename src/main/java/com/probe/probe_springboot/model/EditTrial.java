package com.probe.probe_springboot.model;

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
@Table(name = "EditTrial")
public class EditTrial {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String header;
    private String title;
    private int minAge;
    private int maxAge;
    private String streetName;
    private String doorNumber;
    private String zipCode;
    private String city;
    private String region;
    private String country;
    @Column(columnDefinition = "TEXT")
    private String cardDescription;
    @Column(columnDefinition = "TEXT")
    private String longDescription;
    private String vek;
    private String date;
    private String requiredVisits;
    private String Starttime;
    private int ownerID;
    @ElementCollection
    private List<Integer> participantsID;
    private String MathCodeID;

}
