package com.probe.probe_springboot.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ApiError {

    private String messages;
    private HttpStatus status;
    private LocalDateTime timeStamp;
}
