package com.probe.probe_springboot.CampusNet;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.probe.probe_springboot.exceptions.NotAuthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;


@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/campusnet")
public class CampusNetController {

    @Autowired
    private CampusNetService campusNetService;

    @GetMapping("login")
    public RedirectView login() {
        String URI = "https://auth.dtu.dk/dtu/?service=http://localhost:8080/campusnet/redirect";
        return new RedirectView(URI);
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("redirect")
    public RedirectView callback(@RequestParam String ticket) throws JsonProcessingException, NotAuthorizedException {
        System.out.println(ticket);

        JsonNode json = campusNetService.getDTUCASUser(ticket);

        if (campusNetService.validateDTUToken(json)) {
            return new RedirectView("http://localhost:3000/#/login?token="+campusNetService.dtuCasJwtToken(json));
            //return campusNetService.dtuCasJwtToken(json);
        }
        throw new NotAuthorizedException(json.toString());
    }
}
