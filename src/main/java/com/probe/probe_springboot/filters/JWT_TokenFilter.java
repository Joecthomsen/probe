package com.probe.probe_springboot.filters;

import com.probe.probe_springboot.authentication.JWTHandler;
import com.probe.probe_springboot.authentication.LoginData;
import com.probe.probe_springboot.authentication.ValidationData;
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
        //HttpServletResponse res = (HttpServletResponse) response;

        //String resp = res.getHeader("token");

        String key = req.getHeader("token");

        String requestEmail = req.getHeader("email");

        System.out.println("request:  " + ((HttpServletRequest) request).getHeader("token"));

        //System.out.println("userHeader:  " + resp);
        //System.out.println("Email header  " + resp.getHeader("email"));

        if(key == null) {
            ((HttpServletResponse) response).setStatus(401);
            response.getOutputStream().write("JWT token is missing!".getBytes());
            return;
        }

        if(requestEmail == null){
            response.getOutputStream().write("Header parameter email is missing".getBytes());
            return;
        }

        if(!Objects.equals(JWTHandler.validate(key).getEmail(), requestEmail)) {
            ((HttpServletResponse) response).setStatus(403);
            response.getOutputStream().write("JWT token is invalid".getBytes());
            return;
        }

        chain.doFilter(request, response);
        //chain.doFilter(request, res);
    }
}
