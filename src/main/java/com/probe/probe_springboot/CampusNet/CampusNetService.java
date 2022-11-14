package com.probe.probe_springboot.CampusNet;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.probe.probe_springboot.authentication.JWTHandler;
import com.probe.probe_springboot.authentication.LoginData;
import com.probe.probe_springboot.model.Role;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;


@Service
public class CampusNetService {

    public JsonNode getDTUCASUser(String ticket) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();

        String URI = "https://auth.dtu.dk/dtu/servicevalidate?service=http://localhost:8080/campusnet/redirect&ticket=" + ticket;

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.add("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36");

        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        ResponseEntity<?> result =
                restTemplate.exchange(URI, HttpMethod.GET, entity, String.class);

        XmlMapper xmlMapper = new XmlMapper();

        return xmlMapper.readTree(Objects.requireNonNull(result.getBody()).toString());
    }

    public boolean validateDTUToken(JsonNode node) {
        return node.has("authenticationSuccess");
    }

    public String dtuCasJwtToken(JsonNode node) throws JsonProcessingException {
        List<Role> rolleliste = new ArrayList<>();
        rolleliste.add(new Role("MEDICAL_USER"));
        try {
            return JWTHandler.generateJwtToken(new LoginData(node.get("authenticationSuccess").get("root").get("norEduPerson").get("mail").toString()), rolleliste);
        } catch (Exception e) {
            e.printStackTrace();
            return JWTHandler.generateJwtToken(new LoginData(node.get("authenticationSuccess").get("user").toString()), rolleliste);
        }
    }

}
