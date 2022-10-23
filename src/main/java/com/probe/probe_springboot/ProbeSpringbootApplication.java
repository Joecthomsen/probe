package com.probe.probe_springboot;

import com.probe.probe_springboot.model.Role;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.service.UserServiceImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ProbeSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProbeSpringbootApplication.class, args);
	}

	@Bean
	CommandLineRunner run(UserServiceImpl userServiceImpl){
		return args -> {
			userServiceImpl.saveRole(new Role("CLINICAL_USER"));
			userServiceImpl.saveRole(new Role("MEDICAL_USER"));
			userServiceImpl.saveRole(new Role("ADMIN_USER"));
			userServiceImpl.saveRole(new Role("DEVELOPER_USER"));

			userServiceImpl.saveUser(new User("Male","Hans", "Christian", "1234", null, 82.0, "Cancer", "hans@christian.dk", "12345678", "Hansgade", 44, "2400", "Copenhagen", "Hovedstaden", "Denmark"));
			userServiceImpl.saveUser(new User("Male","Anders", "Andersen", "1234",null, 83.0, "Cancer", "a@b.dk", "12345678", "Hansgade", 44, "2400", "Copenhagen", "Hovedstaden", "Denmark"));
			userServiceImpl.saveUser(new User("Female","Christina", "Ali","1234", null, 82.0, "Cancer", "c@d.dk", "12345678", "Hansgade", 44, "2400", "Copenhagen", "Hovedstaden", "Denmark"));
			userServiceImpl.saveUser(new User("Female","Feduma", "Hansen", "1234",null, 127.0, "Fat", "f@g.dk", "12345678", "Hansgade", 44, "2400", "Copenhagen", "Hovedstaden", "Denmark"));
			userServiceImpl.saveUser(new User("Male","Troels", "Dtu", "1234", null, 55.0, "Stupid", "troels@dtu.dk", "12345678", "Hansgade", 44, "2400", "Copenhagen", "Hovedstaden", "Denmark"));


			Long hansUserId = userServiceImpl.getUserByEmail("hans@christian.dk").getId();
			Long andersUserId = userServiceImpl.getUserByEmail("a@b.dk").getId();
			Long christinaUserId = userServiceImpl.getUserByEmail("c@d.dk").getId();
			Long fedumaUserId = userServiceImpl.getUserByEmail("f@g.dk").getId();
			Long troelsUserId = userServiceImpl.getUserByEmail("troels@dtu.dk").getId();

			userServiceImpl.addRoleToUser(hansUserId, "CLINICAL_USER");
			userServiceImpl.addRoleToUser(andersUserId, "ADMIN_USER");
			userServiceImpl.addRoleToUser(andersUserId, "DEVELOPER_USER");
			userServiceImpl.addRoleToUser(christinaUserId, "MEDICAL_USER");
			userServiceImpl.addRoleToUser(fedumaUserId, "CLINICAL_USER");
			userServiceImpl.addRoleToUser(troelsUserId, "DEVELOPER_USER");
		};
	}
}
