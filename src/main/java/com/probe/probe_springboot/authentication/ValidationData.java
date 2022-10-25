package com.probe.probe_springboot.authentication;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ValidationData {

    public ValidationData(String email){
        this.email = email;
    }

    String email;

}
