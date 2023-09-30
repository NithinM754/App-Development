package com.nithin.studentinfomanagement.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class User {
	public User() {
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUemail() {
		return uemail;
	}
	public void setUemail(String uemail) {
		this.uemail = uemail;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getUpassword() {
		return upassword;
	}
	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "usergen")
	private int id;
	private String uemail;
	private String uname;
	private String upassword;
	public User(int id, String uemail, String uname, String upassword) {
		super();
		this.id = id;
		this.uemail = uemail;
		this.uname = uname;
		this.upassword = upassword;
	}
	

}
