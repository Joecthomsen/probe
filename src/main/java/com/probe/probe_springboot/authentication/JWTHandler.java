package com.probe.probe_springboot.authentication;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import com.probe.probe_springboot.exceptions.TokenExpiredExceptionCustom;
import com.probe.probe_springboot.model.Admin;
import com.probe.probe_springboot.model.Role;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;

public class JWTHandler extends Throwable {

    private static final String key = System.getenv("JWT_KEY");
    private static final int TOKEN_EXPIRY = 2880;

    public static String generateJwtToken(LoginData user, List<Role> roles) throws JsonProcessingException {

        Calendar expiry = Calendar.getInstance();
        expiry.add(Calendar.MINUTE, TOKEN_EXPIRY);
        ObjectMapper objectMapper = new ObjectMapper();
        String email = objectMapper.writer().writeValueAsString(user.getEmail());
        String rolesMapping = objectMapper.writer().writeValueAsString(roles);

        return JWT.create()
                .withIssuer("ProbeDeluxe")
                .withClaim("id", email)
                .withClaim("roles", rolesMapping)
                .withExpiresAt(expiry.getTime())
                .sign(Algorithm.HMAC512(key));
    }

    public static String generateAdminToken(Admin admin) throws JsonProcessingException {

        Calendar expiry = Calendar.getInstance();
        expiry.add(Calendar.MINUTE, TOKEN_EXPIRY);

        return JWT.create()
                .withIssuer("ProbeDeluxe")
                .withClaim("id", admin.getId())
                .withClaim("username", admin.getUsername())
                .withExpiresAt(expiry.getTime())
                .sign(Algorithm.HMAC512(key));
    }

    // TODO Make custom exceptions
    public static boolean validate(String s) throws NotAuthorizedException {

        JWTVerifier verifier = JWT.require(Algorithm.HMAC512(key)).build();
        DecodedJWT jwt = JWT.decode(s);

        if (jwt.getExpiresAt().before(new Date())) {
            throw new TokenExpiredExceptionCustom("JWT expired");
        }

        verifier.verify(s);
        // try {
        // verifier.verify(s);
        // } catch (JWTDecodeException e) {
        // throw new TokenExpiredExceptionCustom("JWT corrupted or expired.");
        // }catch (Exception catchAllExeptions){
        // System.out.println("I'm silly!\n");
        // }
        return true;
    }
}
