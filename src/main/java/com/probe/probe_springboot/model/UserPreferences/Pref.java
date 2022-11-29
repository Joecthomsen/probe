package com.probe.probe_springboot.model.UserPreferences;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pref")
public class Pref {
    @Id
    @Column(name = "id", nullable = false)
    private String id;

    private String text;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}
