package com.probe.probe_springboot.model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String roleName;  //Example ADMIN; USER; MEDICAL and so on

    public Role(String roleName){
        this.roleName = roleName;
    }
}
