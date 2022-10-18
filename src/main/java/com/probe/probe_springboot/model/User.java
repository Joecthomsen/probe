package com.probe.probe_springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Usern")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private boolean medicalUser;
    private String sex;
    private String firstName;
    private String lastName;
    private Date dob;
    private double weight;
    private String chronicDisease;
    private String email;
    private String phoneNumber;
    private String streetName;
    private int doorNumber;
    private String zipCode;
    private String city;
    private String region;
    private String country;

}
