package com.probe.probe_springboot;

//import com.probe.probe_springboot.model.Role;
//import com.probe.probe_springboot.model.User;
//import com.probe.probe_springboot.service.UserServiceImpl;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Profile;

@SpringBootApplication
public class ProbeSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProbeSpringbootApplication.class, args);
	}

//	@Bean
//	@Profile("!test")
//	CommandLineRunner run(UserServiceImpl userServiceImpl){
//		return args -> {
//			userServiceImpl.saveRole(new Role("CLINICAL_USER"));
//			userServiceImpl.saveRole(new Role("MEDICAL_USER"));
//			userServiceImpl.saveRole(new Role("ADMIN_USER"));
//			userServiceImpl.saveRole(new Role("DEVELOPER_USER"));
//
//			userServiceImpl.saveUser(User.builder()
//					.firstName("Hans")
//					.lastName("Christensen")
//					.sex("Male")
//					.hashedPassword("1234")
//					.email("hans@christian.dk")
//					.weight(82.6)
//					.dob(null)
//					.chronicDisease("Cancer")
//					.phoneNumber("22234434")
//					.streetName("Fensmarkgade")
//					.doorNumber(22)
//					.zipCode("2200")
//					.city("Copenhagen")
//					.region("Hovedstaden")
//					.country("Denmark")
//					.build());
//
//			userServiceImpl.saveUser(User.builder()
//					.firstName("Anders")
//					.lastName("Andersen")
//					.sex("Male")
//					.hashedPassword("1234")
//					.email("a@b.dk")
//					.weight(82.6)
//					.dob(null)
//					.chronicDisease("Cancer")
//					.phoneNumber("22234434")
//					.streetName("Fensmarkgade")
//					.doorNumber(22)
//					.zipCode("2200")
//					.city("Copenhagen")
//					.region("Hovedstaden")
//					.country("Denmark")
//					.build());
//
//			userServiceImpl.saveUser(User.builder()
//					.firstName("Marianne")
//					.lastName("Ali")
//					.sex("Female")
//					.hashedPassword("1234")
//					.email("c@d.dk")
//					.weight(82.6)
//					.dob(null)
//					.chronicDisease("Cancer")
//					.phoneNumber("22234434")
//					.streetName("Fensmarkgade")
//					.doorNumber(22)
//					.zipCode("2200")
//					.city("Copenhagen")
//					.region("Hovedstaden")
//					.country("Denmark")
//					.build());
//
//			userServiceImpl.saveUser(User.builder()
//					.firstName("Feduma")
//					.lastName("Hansen")
//					.sex("Female")
//					.hashedPassword("1234")
//					.email("f@g.dk")
//					.weight(122.6)
//					.dob(null)
//					.chronicDisease("Cancer")
//					.phoneNumber("22234434")
//					.streetName("Fensmarkgade")
//					.doorNumber(22)
//					.zipCode("2200")
//					.city("Copenhagen")
//					.region("Hovedstaden")
//					.country("Denmark")
//					.build());
//
//			userServiceImpl.saveUser(User.builder()
//					.firstName("Troels")
//					.lastName("Dtu")
//					.sex("Male")
//					.hashedPassword("1234")
//					.email("troels@dtu.dk")
//					.weight(82.6)
//					.dob(null)
//					.chronicDisease("Cancer")
//					.phoneNumber("22234434")
//					.streetName("Fensmarkgade")
//					.doorNumber(22)
//					.zipCode("2200")
//					.city("Copenhagen")
//					.region("Hovedstaden")
//					.country("Denmark")
//					.build());
//
//			Long hansUserId = userServiceImpl.getUserByEmail("hans@christian.dk").getId();
//			Long andersUserId = userServiceImpl.getUserByEmail("a@b.dk").getId();
//			Long christinaUserId = userServiceImpl.getUserByEmail("c@d.dk").getId();
//			Long fedumaUserId = userServiceImpl.getUserByEmail("f@g.dk").getId();
//			Long troelsUserId = userServiceImpl.getUserByEmail("troels@dtu.dk").getId();
//
//			userServiceImpl.addRoleToUser(hansUserId, "CLINICAL_USER");
//			userServiceImpl.addRoleToUser(andersUserId, "ADMIN_USER");
//			userServiceImpl.addRoleToUser(andersUserId, "DEVELOPER_USER");
//			userServiceImpl.addRoleToUser(christinaUserId, "MEDICAL_USER");
//			userServiceImpl.addRoleToUser(fedumaUserId, "CLINICAL_USER");
//			userServiceImpl.addRoleToUser(troelsUserId, "DEVELOPER_USER");
//		};
//	}
	//This is a silly comment
}
