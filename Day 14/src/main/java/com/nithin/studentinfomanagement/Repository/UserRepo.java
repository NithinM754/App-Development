package com.nithin.studentinfomanagement.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nithin.studentinfomanagement.Model.User;

@Repository
public interface UserRepo extends CrudRepository<User,Integer>{
	 boolean existsByEmail(String email);

	    User findByUsernameAndPassword(String username, String password);

	    User findByEmailAndPassword(String username, String password);
	     
	    Optional<User> findByEmail(String username);

}
