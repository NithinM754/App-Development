package com.nithin.studentinfomanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nithin.studentinfomanagement.Model.User;

public interface UserRepo extends JpaRepository<User,Integer>{

}
