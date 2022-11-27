package tn.esprit.spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entity.User;
import tn.esprit.spring.repository.UserRepository;
import tn.esprit.spring.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class UserController {
	
	@Autowired
	private UserService Userservice;
	
	@Autowired
	private UserRepository userRepo;
	
	// get all users 
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return Userservice.getAllUsers();
		
	}
	
	@DeleteMapping("/deleteUser/{id}")
	@ResponseBody
	public void deleteAnnonce(@PathVariable("id") Long id)
	{
		
		Userservice.deleteUserByid(id);
	}
	// create user 
	@PostMapping("/users")
	public User createUser(@RequestBody User u) {
		return Userservice.saveUser(u);
	}
	
	@GetMapping("/users/{username}")
	public ResponseEntity<User> getUserById(@PathVariable String username) {
		User u =Userservice.getUserByUsername(username);
		return ResponseEntity.ok(u);
	}
	@GetMapping("/usersFA/{id}")
	public ResponseEntity<User> getUserByIdFromAnnonce(@PathVariable Long id) {
		User u =Userservice.getUser(id);

		return ResponseEntity.ok(u);
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id,@RequestBody User u){
		User UX = Userservice.getUser(id);
		
		UX.setUsername(u.getUsername());
		UX.setEmail(u.getEmail());
		UX.setPassword(u.getPassword());
		
		
		User updateUser = Userservice.updateUser(UX);
		return ResponseEntity.ok(updateUser);
	}
	
	@RequestMapping(value ="/login/{username}",method = RequestMethod.GET)
	public Optional<User> getUserByUsernamePassword(@PathVariable("username") String
	username) {
	return userRepo.findByUsername(username);
	}
	
	@PutMapping("/users/SetImage/{id}")
	public ResponseEntity<User> SetUserImage(@PathVariable Long id,@RequestBody String img){
		User UX = Userservice.getUser(id);
		
	
		UX.setImage(img);
		User updateUser = Userservice.updateUser(UX);
		return ResponseEntity.ok(updateUser);
	}

	@GetMapping("/usersid/{userid}")
	public ResponseEntity<User> getUserByIdd(@PathVariable long userid) {
		User u =Userservice.getUser(userid);
		return ResponseEntity.ok(u);
	}

}
