package com.probe.probe_springboot.authentication;

import com.probe.probe_springboot.model.Role;
import com.probe.probe_springboot.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;

@AllArgsConstructor
@Data
public class ReturnUserData {

    private String token;
    private String email;
    private String sex;
    private String firstName;
    private String lastName;
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
    private Collection<Role> roles;

    public static ReturnUserData createReturnObject(User user, String token){
        return new ReturnUserData(token,
                user.getEmail(),
                user.getSex(),
                user.getFirstName(),
                user.getLastName(),
                user.getDob(),
                user.getWeight(),
                user.getChronicDisease(),
                user.getPhoneNumber(),
                user.getStreetName(),
                user.getDoorNumber(),
                user.getZipCode(),
                user.getCity(),
                user.getRegion(),
                user.getCountry(),
                user.getRoles());
    }
}
