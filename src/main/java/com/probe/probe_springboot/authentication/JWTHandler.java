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
import com.probe.probe_springboot.model.Role;
import com.probe.probe_springboot.model.User;


import java.util.Base64;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;

public class JWTHandler extends Throwable {
    private static final String key = System.getenv("JWT_KEY");
    private static final int TOKEN_EXPIRY = 2880;

    public static String generateJwtToken(LoginData user) throws JsonProcessingException {

        Calendar expiry = Calendar.getInstance();
        expiry.add(Calendar.MINUTE, TOKEN_EXPIRY);
        ObjectMapper objectMapper = new ObjectMapper();
        String s = objectMapper.writer().writeValueAsString(user.getEmail());
        //System.out.println("USER!!!   !!!  ::: " + user);

        //Har lige tilføjet den her hilsen Troels :-)
        //if medical user
//        if (user.getEmail().equals("Medical")) {
//            String s2 = objectMapper.writer().writeValueAsString(email);
//            return JWT.create()
//                    .withIssuer("ProbeDeluxe")
//                    .withClaim("user", s)
//                    .withClaim("ownerID", s2)
//                    .withClaim("role", "Medical")
//                    .withExpiresAt(expiry.getTime())
//                    .sign(Algorithm.HMAC512(key));
//        }

        return JWT.create()
                .withIssuer("ProbeDeluxe")
                .withClaim("user", s)
                .withExpiresAt(expiry.getTime())
                .sign(Algorithm.HMAC512(key));
    }

    //TODO Make custom exceptions

    public static boolean validate(String s) throws NotAuthorizedException {

        JWTVerifier verifier = JWT.require(Algorithm.HMAC512(key)).build();
        try {
            verifier.verify(s);
        } catch (Exception e) {
            throw new TokenExpiredExceptionCustom("JWT corrupted or expired.");
        }
        return true;
    }

//    public static String getUserEmailFromToken(String token){
//        JWT jwt = new JWT();
//        String email = jwt.decodeJwt(token).getPayload();
//        System.out.println("Email: " + email);
//        return "Muuh";
//    }
}

