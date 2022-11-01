package com.probe.probe_springboot.authentication;

import com.probe.probe_springboot.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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
