package com.probe.probe_springboot.authentication;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginData {

    public LoginData(String email){
        this.email = email;
    }

    private String email;
    private String password;

}
