package com.probe.probe_springboot.exceptions;

public class TokenExpiredExceptionCustom extends RuntimeException{

    public TokenExpiredExceptionCustom(String message){super(message);}
}
