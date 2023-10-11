package com.nithin.studentinfo.service;

import java.util.List;

import com.nithin.studentinfo.dto.reponse.StudentResponse;
import com.nithin.studentinfo.dto.request.StudentRequest;
import com.nithin.studentinfo.model.Student;

public interface StudentService {
    boolean saveStudent(Student request);

    List<StudentResponse> getAllStudents();

    StudentResponse getStudent(Long pid);

    StudentResponse updateStudent(StudentRequest request, Long pid);

    boolean deleteStudent(Long pid);


}
