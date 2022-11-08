package com.probe.probe_springboot.exceptions;

public class NotAuthorizedException extends Throwable{
    public NotAuthorizedException(String s) {
        super((s));
    }

}
