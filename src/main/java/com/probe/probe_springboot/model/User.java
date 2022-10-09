package com.probe.probe_springboot.model;

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
@Table(name = "User")
public class User {

    @Id
    private String cpr;
    private String firstName;
    private String lastName;
    private int age;
    private int weight;
    private String chronicDisease;
    private String streetName;
    private int doorNumber;
    private int zipCode;
    private String city;
    private String region;
    private String country;



}
