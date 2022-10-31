package com.probe.probe_springboot.exceptions.EditTrials;

public class NotATrial extends RuntimeException{
    public NotATrial(String messages) {
        super(messages);
    }
}
