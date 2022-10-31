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
@ToString
@Builder
@Entity
@Table(name = "Users")
public class User {

    @Id
    private String email;
    private String sex;
    private String firstName;
    private String lastName;
    private String password;
    private Date dob;
    private String weight;
    private String chronicDisease;
    private String phoneNumber;
    private String streetName;
    private String doorNumber;
    private String zipCode;
    private String city;
    private String region;
    private String country;

    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles = new ArrayList<>();

}
