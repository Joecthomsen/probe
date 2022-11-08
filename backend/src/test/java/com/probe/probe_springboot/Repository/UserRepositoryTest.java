package com.probe.probe_springboot.Repository;

import com.probe.probe_springboot.model.User;
import com.probe.probe_springboot.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.Objects;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@ActiveProfiles("test")

class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void ItShouldCheckIfUserExistByEmail() {

        //Given
        User user = User.builder()
					.firstName("Feduma")
					.lastName("Hansen")
					.sex("Female")
					.password("1234")
					.email("f@g.dk")
					.weight("122.6")
					.dob(null)
					.chronicDisease("Cancer")
					.phoneNumber("22234434")
					.streetName("Fensmarkgade")
					.doorNumber("22")
					.zipCode("2200")
					.city("Copenhagen")
					.region("Hovedstaden")
					.country("Denmark")
					.build();
        userRepository.save(user);
        //When
        User userToTest = userRepository.findByEmail("f@g.dk") ;
        //Then
        assertThat(userToTest).isNotNull();
    }
}