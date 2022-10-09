package com.probe.probe_springboot;

import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProbeSpringbootApplication {

	public static void main(String[] args) {

		//User user = new User("121110-0908", "John", "Thom", 32, 80, "Cancer", "Fensmarkgade", 51, 2200, "Copenhagen", "Hovedstaden", "Denmark");
		SpringApplication.run(ProbeSpringbootApplication.class, args);
	}

}
