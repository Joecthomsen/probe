package com.probe.probe_springboot.filters;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JWT_TokenFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        String key = req.getHeader("user");
        System.out.println("HEADER:: :: :: " + req);
        if(key == null) {
            ((HttpServletResponse) response).setStatus(401);
            response.getOutputStream().write("API Key is missing!".getBytes());
            return;
        }

//        if(!KeyValidator.valid(key)) {
//            ((HttpServletResponse) response).setStatus(403);
//            response.getOutputStream().write("API Key is invalid".getBytes());
//            return;
//        }

        chain.doFilter(request, response);
    }
}
