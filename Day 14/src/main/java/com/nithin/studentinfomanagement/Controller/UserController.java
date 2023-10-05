package com.nithin.studentinfomanagement.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nithin.studentinfomanagement.Model.User;
import com.nithin.studentinfomanagement.Repository.UserRepo;
@RestController
@CrossOrigin
public class UserController {

	@Autowired private UserRepo userRepo;
	
	@PostMapping("/signup")
	public User signUpUser(@RequestBody User user){
		boolean userExist = userRepo.existsByEmail(user.getUemail());
		if(userExist){
			return null;
		}
		return userRepo.save(user);
	} 
	@GetMapping("/getall")
	public List<User> getAll(){
		return (List<User>) userRepo.findAll();
	}
	@GetMapping("/login")
	public User logIn(@RequestParam String email,@RequestParam String password){
		User isUser = userRepo.findByUsernameAndPassword(email,password);
		User isEmail = userRepo.findByEmailAndPassword(email,password);
		if(isEmail!=null)
		{
			return isEmail;
		}
		else if(isUser!=null)
			return isUser;
		return null;
	}
	@GetMapping("/byUserId")
	public User getUser(@RequestParam int id){
		return userRepo.findById(id).get();
	}
}
