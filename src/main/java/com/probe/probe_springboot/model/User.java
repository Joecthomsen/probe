package com.probe.probe_springboot.model;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    //private boolean medicalUser;
    private String sex;
    private String firstName;
    private String lastName;
    private String hashedPassword;
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

    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles = new ArrayList<>();

//    public User(String userName, String s) {
//
//    }

//    public User(Long id, String firstname, String lastname, String gender, Date date, double weight, String chronicDisease, String email, String phonenumber, String streetName, int doorNumber, String zipCode, String city, String region, String country) {
//
//    }

//    public User(String sex, String firstName, String lastName, String password, Date dob, double weight, String chronicDisease, String email, String phoneNumber, String streetName, int doorNumber, String zipCode, String city, String region, String country) {
//        this.sex = sex;
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.hashedPassword = password;
//        this.dob = dob;
//        this.weight = weight;
//        this.chronicDisease = chronicDisease;
//        this.email = email;
//        this.phoneNumber = phoneNumber;
//        this.streetName = streetName;
//        this.doorNumber = doorNumber;
//        this.zipCode = zipCode;
//        this.city = city;
//        this.region = region;
//        this.country = country;
//    }
}
