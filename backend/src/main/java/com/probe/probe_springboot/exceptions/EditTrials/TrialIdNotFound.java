package com.probe.probe_springboot.exceptions.EditTrials;

public class TrialIdNotFound extends RuntimeException{
    public TrialIdNotFound(String messages) {
        super(messages);
    }
}
