package com.probe.probe_springboot.model;

import javax.persistence.*;
import lombok.*;

@Getter

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Entity
@Table(name = "Admin")

public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Setter
    @Column(unique = true)
    private String username;

    @Setter
    private String password;
}