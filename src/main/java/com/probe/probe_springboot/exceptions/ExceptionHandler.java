package com.probe.probe_springboot.exceptions;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class ExceptionHandler extends ResponseEntityExceptionHandler {

    @org.springframework.web.bind.annotation.ExceptionHandler(UserNotFound.class)
    public ResponseEntity<Object> handleUserNotFound(UserNotFound ex, WebRequest request) {
        return new ResponseEntity<>(new ApiError(ex.getMessage(), HttpStatus.NOT_FOUND, request.toString(), LocalDateTime.now()), HttpStatus.NOT_FOUND);
    }

    @Override
    protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers, HttpStatus status,  WebRequest request){
        return new ResponseEntity<>(new ApiError(ex.getMessage(), HttpStatus.NOT_FOUND, request.toString(), LocalDateTime.now()), HttpStatus.NOT_FOUND );
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(UserAlreadyExists.class)
    public ResponseEntity<Object> handelUserAlreadyExistsException(UserAlreadyExists ex, WebRequest request){
        System.out.println("Request: " + request);
        return new ResponseEntity<>(new ApiError(ex.getMessage(), HttpStatus.BAD_REQUEST, request.toString(), LocalDateTime.now()), HttpStatus.BAD_REQUEST);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(TokenExpiredExceptionCustom.class)
    public ResponseEntity<Object> handelTokenExpiredException(TokenExpiredExceptionCustom ex, WebRequest request){
        return new ResponseEntity<>(new ApiError(ex.getMessage(), HttpStatus.UNAUTHORIZED, request.toString(), LocalDateTime.now()), HttpStatus.BAD_REQUEST);
    }
}
