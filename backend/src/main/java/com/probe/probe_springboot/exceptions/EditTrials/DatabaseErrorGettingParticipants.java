package com.probe.probe_springboot.exceptions.EditTrials;

public class DatabaseErrorGettingParticipants extends RuntimeException{
    public DatabaseErrorGettingParticipants(String messages) {
        super(messages);
    }
}

