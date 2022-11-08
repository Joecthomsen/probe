package com.probe.probe_springboot.exceptions.EditTrials;

public class OwnerIDNotFound extends RuntimeException{
    public OwnerIDNotFound(String messages) {
        super(messages);
    }
}
