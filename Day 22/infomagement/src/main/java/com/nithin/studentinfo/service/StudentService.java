package com.nithin.studentinfo.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.nithin.studentinfo.dto.reponse.StudentResponse;
import com.nithin.studentinfo.dto.request.AttendanceRequest;
import com.nithin.studentinfo.dto.request.StudentRequest;
import com.nithin.studentinfo.model.Attendance;
import com.nithin.studentinfo.model.Student;

@Service
public interface StudentService {
    boolean saveStudent(Student request);

    List<StudentResponse> getAllStudents();

    StudentResponse getStudent(Long pid);

    StudentResponse updateStudent(StudentRequest request, Long pid);

    boolean deleteStudent(Long pid);

    ResponseEntity<Attendance> postAttendance(AttendanceRequest att);


}
