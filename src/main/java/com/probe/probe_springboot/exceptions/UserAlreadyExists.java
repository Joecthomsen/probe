package com.probe.probe_springboot.exceptions;

public class UserAlreadyExists extends RuntimeException{
    public UserAlreadyExists(String messages){
        super(messages);
    }
}
