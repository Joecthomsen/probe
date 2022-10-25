package com.probe.probe_springboot.authentication;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.probe.probe_springboot.model.User;

import java.util.Calendar;

public class JWTHandler {
    private static final String key = System.getenv("JWT_KEY");
    private static final int TOKEN_EXPIRY = 2880;

    public static String generateJwtToken(LoginData user) throws JsonProcessingException {

        Calendar expiry = Calendar.getInstance();
        expiry.add(Calendar.MINUTE, TOKEN_EXPIRY);
        ObjectMapper objectMapper = new ObjectMapper();
        String s = objectMapper.writer().writeValueAsString(user.getEmail());
        System.out.println("USER!!!   !!!  ::: " + user);

        return JWT.create()
                .withIssuer("ProbeDelux")
                .withClaim("user", s)
                .withExpiresAt(expiry.getTime())
                .sign(Algorithm.HMAC512(key));
    }

    public static LoginData validate(String s){
        JWTVerifier verifier = JWT.require(Algorithm.HMAC512(key)).build();
        DecodedJWT verify = verifier.verify(s);
        Claim user = verify.getClaim("user");
        try {
            return new ObjectMapper().reader().forType(LoginData.class).readValue(user.asString());
        }catch (JsonProcessingException e){
            throw new RuntimeException(e);
        }
    }
}
