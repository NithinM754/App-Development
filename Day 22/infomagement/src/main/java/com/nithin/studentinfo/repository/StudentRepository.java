package com.nithin.studentinfo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.nithin.studentinfo.model.Student;

public interface StudentRepository extends CrudRepository<Student,Long>{
    Optional<Student> findByStudentName(String studentName);

}
