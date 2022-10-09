package com.probe.probe_springboot;

import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProbeSpringbootApplication {


	public static void main(String[] args) {
//		for (int i = 0 ; i < 10 ; i++){
//			User user = new User("1211-"+i, "John", "Thom", 32, 80, "Cancer", "Fensmarkgade", 51, 2200, "Copenhagen", "Hovedstaden", "Denmark");
//		}
		SpringApplication.run(ProbeSpringbootApplication.class, args);
	}

}
