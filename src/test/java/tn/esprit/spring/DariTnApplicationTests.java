package tn.esprit.spring;

import org.junit.jupiter.api.Test;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import tn.esprit.spring.entity.User;
import tn.esprit.spring.repository.AnnonceRepository;
import tn.esprit.spring.repository.UserRepository;
import tn.esprit.spring.service.UserService;

@SpringBootTest
class DariTnApplicationTests {
	
	@Autowired
	AnnonceRepository ar;

	@Autowired
	UserRepository ur;
	
	@Autowired
	UserService us;
	
	@Test
	void contextLoads() {
		User u=us.getUserByUsername("adminFiras");
		System.out.println("Email : "+u.getEmail()+" id  :" + u.getId());
		
		
	}
	
	
	

}
