package com.probe.probe_springboot.exceptions;

public class UserNotExist extends RuntimeException {
    public UserNotExist(String messages) {
        super(messages);
    }
}
