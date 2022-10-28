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


import java.util.Base64;
import java.util.Calendar;
import java.util.Date;

public class JWTHandler extends Throwable{
    private static final String key = System.getenv("JWT_KEY");
    private static final int TOKEN_EXPIRY = 2880;

    public static String generateJwtToken(LoginData user) throws JsonProcessingException {

        Calendar expiry = Calendar.getInstance();
        expiry.add(Calendar.MINUTE, TOKEN_EXPIRY);
        ObjectMapper objectMapper = new ObjectMapper();
        String s = objectMapper.writer().writeValueAsString(user.getEmail());
        System.out.println("USER!!!   !!!  ::: " + user);

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
        }catch (Exception e){
            throw new TokenExpiredExceptionCustom("JWT corrupted or expired.");
        }
        return true;

//        JWTVerifier verifier = JWT.require(Algorithm.HMAC512(key)).build();
//        DecodedJWT verify = verifier.verify(s);
//        Claim user = verify.getClaim("user");
////        Claim unixTimeExpire = verify.getClaim("exp");
////        long unixTimeNow = System.currentTimeMillis() / 1000L;
//        //System.out.println("User: " + user + "ExpTime: " + unixTimeExpire + "Now: " + unixTimeNow);
////
////        if(verify.getExpiresAt().before(new Date())){
////            throw
////        }
//
//        try {
//            new ObjectMapper().reader().forType(ValidationData.class).readValue(user.asString());
//        }catch (JsonProcessingException e){
//            System.out.println("Token corrupted");
//            //throw new RuntimeException(e);
//            throw new NotAuthorizedException("JWT is corrupted");
//        }
//
//        if(verify.getExpiresAt().before(new Date())){
//            System.out.println("Token Expired");
//            throw new TokenExpiredException("JWT expired");
//        }


//        return true;
    }
}

