package tn.esprit.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.User;
import tn.esprit.spring.repository.UserRepository;

@Service
public class UserServiceIMPL implements UserService {

	@Autowired
	UserRepository UserRepo;

	@Override
	public User saveUser(User u) {

		return UserRepo.save(u);
	}

	@Override
	public User updateUser(User u) {
		// TODO Auto-generated method stub
		return UserRepo.save(u);
	}

	@Override
	public void deleteUser(User u) {
		// TODO Auto-generated method stub
		UserRepo.delete(u);
	}

	@Override
	public void deleteUserById(Long id) {
		// TODO Auto-generated method stub
		UserRepo.deleteById(id);
	}

	@Override
	public User getUser(Long id) {
		// TODO Auto-generated method stub
		return UserRepo.findById(id).orElseThrow(null);
	}
	@Override
	public User getUserByUsername(String username) {
		// TODO Auto-generated method stub
		return UserRepo.findByUsername(username).orElseThrow(null);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return UserRepo.findAll();
	}
	
	
@Override
public void SetImageUser(Long id,String img) {
	
	User u = UserRepo.findById(id).orElseThrow(null);
	u.setImage(img);
	
	
}

@Override
public void deleteUserByid(Long id) {
	UserRepo.deleteById(id);
	
}
@Override
public boolean FKuserroles(Long id) {
	UserRepo.FKuserRoles(id);
	return true;
}
}
