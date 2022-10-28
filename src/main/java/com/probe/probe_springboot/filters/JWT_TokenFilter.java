package com.probe.probe_springboot.filters;

import com.probe.probe_springboot.authentication.JWTHandler;
import com.probe.probe_springboot.authentication.LoginData;
import com.probe.probe_springboot.authentication.ValidationData;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.Objects;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JWT_TokenFilter implements Filter {

        //TODO Customized Exceptions

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
//        @Autowired
        HttpServletRequest req = (HttpServletRequest) request;
        JWTHandler jwtHandler = new JWTHandler();

        String token = req.getHeader("token");

        String requestEmail = req.getHeader("email");

        System.out.println("request:  " + ((HttpServletRequest) request).getHeader("token"));


        if(token == null) {
            ((HttpServletResponse) response).setStatus(401);
            response.getOutputStream().write("JWT token is missing!".getBytes());
            return;
        }

        if(requestEmail == null){
            response.getOutputStream().write("Header parameter email is missing".getBytes());
            return;
        }

        try {
            JWTHandler.validate(token);
        } catch (NotAuthorizedException e) {
            throw new RuntimeException(e);
        }

//        if(!Objects.equals(JWTHandler.validate(token).getEmail(), requestEmail)) {
//            ((HttpServletResponse) response).setStatus(403);
//            response.getOutputStream().write("JWT token is invalid".getBytes());
//            return;
//        }

        chain.doFilter(request, response);
        //chain.doFilter(request, res);
    }
}
