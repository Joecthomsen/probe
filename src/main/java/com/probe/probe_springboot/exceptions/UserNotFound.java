package com.probe.probe_springboot.exceptions;

public class UserNotFound extends RuntimeException {
    public UserNotFound(String messages) {
        super(messages);
    }
}
