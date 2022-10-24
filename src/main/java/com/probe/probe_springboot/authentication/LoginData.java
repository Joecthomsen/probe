package com.probe.probe_springboot.authentication;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginData {
    private String email;
    private String password;

//    public LoginData(String email, String s) {
//    }
}
