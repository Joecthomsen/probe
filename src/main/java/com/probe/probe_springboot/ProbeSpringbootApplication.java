package com.probe.probe_springboot;

import com.probe.probe_springboot.model.Admin;
import com.probe.probe_springboot.model.Role;
import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.model.UserPreferences.*;
import com.probe.probe_springboot.service.AdminServiceImpl;
import com.probe.probe_springboot.service.UserSettings.PrefAndChoiceService;
import com.probe.probe_springboot.service.UserServiceImpl;
import com.probe.probe_springboot.service.UserSettings.UserSettingsService;
import lombok.extern.log4j.Log4j2;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCrypt;

@EnableJpaRepositories
@Log4j2
@SpringBootApplication
public class ProbeSpringbootApplication implements ApplicationRunner {

	private static final Logger logger = LogManager.getLogger(ProbeSpringbootApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ProbeSpringbootApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments applicationArguments) throws Exception {
		logger.debug("Debugging log");
		logger.info("Info log");
		logger.warn("Hey, This is a warning!");
		logger.error("Oops! We have an Error. OK");
		logger.fatal("Damn! Fatal error. Please fix me.");
	}

	@Bean
	@Profile("!test")
	CommandLineRunner run(UserServiceImpl userService, AdminServiceImpl adminServiceImpl, UserSettingsService userSettingsService, PrefAndChoiceService prefAndChoiceService) {
		return args -> {
			log.error("Dame, I'm working!");
			// DefaultExports.initialize();
			// HTTPServer prometheusServer = new HTTPServer(666);
			// Tomcat tomcat = new Tomcat();

			userService.saveRole(new Role("CLINICAL_USER"));
			userService.saveRole(new Role("MEDICAL_USER"));
			userService.saveRole(new Role("ADMIN_USER"));

			userService.saveUser(User.builder().email("TestUser").password("test").build());
			userService.addRoleToUser("TestUser", "MEDICAL_USER");

			Admin admin = new Admin();
			admin.setPassword(BCrypt.hashpw("admin", BCrypt.gensalt()));
			admin.setUsername("admin");
			adminServiceImpl.addAdmin(admin);

			SeedUserSetting(userSettingsService, prefAndChoiceService);


	//		SeedPrefChoiceAndUserSetting(userSettingsService, prefAndChoiceService);
		};
	}

	private void SeedUserSetting(UserSettingsService userSettingsService, PrefAndChoiceService prefAndChoiceService) {
		Choicee choiceeNo = new Choicee("no", "yesNo");
		prefAndChoiceService.AddChoicee(choiceeNo);
		Choicee choiceeYes = new Choicee("yes", "yesNo");
		prefAndChoiceService.AddChoicee(choiceeYes);
		Choicee languageDA = new Choicee("Danish", "language");
		prefAndChoiceService.AddChoicee(languageDA);
		Choicee languageEn = new Choicee("English", "language");
		prefAndChoiceService.AddChoicee(languageEn);
		Choicee languageGer = new Choicee("German", "language");
		prefAndChoiceService.AddChoicee(languageGer);
		Choicee languageSpa = new Choicee("Spanish", "language");
		prefAndChoiceService.AddChoicee(languageSpa);

		Pref prefAccomByHelper = new Pref("Need to be accompanied by helper?", "yesNo");
		prefAndChoiceService.AddPref(prefAccomByHelper);
		Pref prefPhysicalWork = new Pref("Willing to do intense physical work?", "yesNo");
		prefAndChoiceService.AddPref(prefPhysicalWork);
		Pref prefLanguage = new Pref("Preferred language?", "language");
		prefAndChoiceService.AddPref(prefLanguage);

		UserSettings userSettings = new UserSettings("TestUser", true);
		UserSettings savedSettings = userSettingsService.saveUserSettings(userSettings);

		UserPrefs userPref1 = new UserPrefs(savedSettings, prefAccomByHelper, choiceeNo);
		var tempUSerPref =  prefAndChoiceService.AddUserPref(userPref1);
		UserPrefs userPref2 = new UserPrefs(savedSettings, prefPhysicalWork, choiceeYes);
		var tempUSerPref2 =  prefAndChoiceService.AddUserPref(userPref2);



	}

	// @Bean
	// @Profile("!test")
	// CommandLineRunner run(UserServiceImpl userServiceImpl){
	// return args -> {
	// userServiceImpl.saveRole(new Role("CLINICAL_USER"));
	// userServiceImpl.saveRole(new Role("MEDICAL_USER"));
	// userServiceImpl.saveRole(new Role("ADMIN_USER"));
	// userServiceImpl.saveRole(new Role("DEVELOPER_USER"));
	//
	// userServiceImpl.saveUser(User.builder()
	// .firstName("Hans")
	// .lastName("Christensen")
	// .sex("Male")
	// .hashedPassword("1234")
	// .email("hans@christian.dk")
	// .weight(82.6)
	// .dob(null)
	// .chronicDisease("Cancer")
	// .phoneNumber("22234434")
	// .streetName("Fensmarkgade")
	// .doorNumber(22)
	// .zipCode("2200")
	// .city("Copenhagen")
	// .region("Hovedstaden")
	// .country("Denmark")
	// .build());
	//
	// userServiceImpl.saveUser(User.builder()
	// .firstName("Anders")
	// .lastName("Andersen")
	// .sex("Male")
	// .hashedPassword("1234")
	// .email("a@b.dk")
	// .weight(82.6)
	// .dob(null)
	// .chronicDisease("Cancer")
	// .phoneNumber("22234434")
	// .streetName("Fensmarkgade")
	// .doorNumber(22)
	// .zipCode("2200")
	// .city("Copenhagen")
	// .region("Hovedstaden")
	// .country("Denmark")
	// .build());
	//
	// userServiceImpl.saveUser(User.builder()
	// .firstName("Marianne")
	// .lastName("Ali")
	// .sex("Female")
	// .hashedPassword("1234")
	// .email("c@d.dk")
	// .weight(82.6)
	// .dob(null)
	// .chronicDisease("Cancer")
	// .phoneNumber("22234434")
	// .streetName("Fensmarkgade")
	// .doorNumber(22)
	// .zipCode("2200")
	// .city("Copenhagen")
	// .region("Hovedstaden")
	// .country("Denmark")
	// .build());
	//
	// userServiceImpl.saveUser(User.builder()
	// .firstName("Feduma")
	// .lastName("Hansen")
	// .sex("Female")
	// .hashedPassword("1234")
	// .email("f@g.dk")
	// .weight(122.6)
	// .dob(null)
	// .chronicDisease("Cancer")
	// .phoneNumber("22234434")
	// .streetName("Fensmarkgade")
	// .doorNumber(22)
	// .zipCode("2200")
	// .city("Copenhagen")
	// .region("Hovedstaden")
	// .country("Denmark")
	// .build());
	//
	// userServiceImpl.saveUser(User.builder()
	// .firstName("Troels")
	// .lastName("Dtu")
	// .sex("Male")
	// .hashedPassword("1234")
	// .email("troels@dtu.dk")
	// .weight(82.6)
	// .dob(null)
	// .chronicDisease("Cancer")
	// .phoneNumber("22234434")
	// .streetName("Fensmarkgade")
	// .doorNumber(22)
	// .zipCode("2200")
	// .city("Copenhagen")
	// .region("Hovedstaden")
	// .country("Denmark")
	// .build());
	//
	// Long hansUserId =
	// userServiceImpl.getUserByEmail("hans@christian.dk").getId();
	// Long andersUserId = userServiceImpl.getUserByEmail("a@b.dk").getId();
	// Long christinaUserId = userServiceImpl.getUserByEmail("c@d.dk").getId();
	// Long fedumaUserId = userServiceImpl.getUserByEmail("f@g.dk").getId();
	// Long troelsUserId = userServiceImpl.getUserByEmail("troels@dtu.dk").getId();
	//
	// userServiceImpl.addRoleToUser(hansUserId, "CLINICAL_USER");
	// userServiceImpl.addRoleToUser(andersUserId, "ADMIN_USER");
	// userServiceImpl.addRoleToUser(andersUserId, "DEVELOPER_USER");
	// userServiceImpl.addRoleToUser(christinaUserId, "MEDICAL_USER");
	// userServiceImpl.addRoleToUser(fedumaUserId, "CLINICAL_USER");
	// userServiceImpl.addRoleToUser(troelsUserId, "DEVELOPER_USER");
	// };
	// }
	// This is a silly comment //Yes it is
}
