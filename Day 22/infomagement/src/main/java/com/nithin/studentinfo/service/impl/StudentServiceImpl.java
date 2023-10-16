package com.nithin.studentinfo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.nithin.studentinfo.dto.reponse.StudentResponse;
import com.nithin.studentinfo.dto.request.AttendanceRequest;
import com.nithin.studentinfo.dto.request.StudentRequest;
import com.nithin.studentinfo.model.Attendance;
import com.nithin.studentinfo.model.Student;
import com.nithin.studentinfo.repository.AttendanceRepository;
import com.nithin.studentinfo.repository.StudentRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.var;

@Service
@Transactional
@RequiredArgsConstructor
public class StudentServiceImpl {

    private final StudentRepository studentRepository;
    private final AttendanceRepository attendanceRepository;

    public boolean saveStudent(StudentRequest request) {
        if (studentRepository.findByStudentName(request.getStudentName()).isPresent()) {
            return false;
        }

        var student = Student.builder()
                .studentName(request.getStudentName())
                .studentRoll(request.getStudentRoll())
                .studentDob(request.getStudentDob())
                .studentClas(request.getStudentClas())
                .studentImage(request.getStudentImage())
                .build();
        studentRepository.save(student);

        return true;
    }

    public List<StudentResponse> getAllStudents() {
        List<Student> studentList = (List<Student>) studentRepository.findAll();

        return studentList.stream()
                .map(this::mapStudentToResponse)
                .collect(Collectors.toList());
    }

    public StudentResponse getStudent(Long sid) {
        Student Student = studentRepository.findById(sid).get();
        return mapStudentToResponse(Student);
    }

    public StudentResponse updateStudent(StudentRequest request, Long sid) {
        Student Student = studentRepository.findById(sid).get();

        if (Student != null) {
            Student.setStudentName(request.getStudentName());
            Student.setStudentRoll(request.getStudentRoll());
            Student.setStudentDob(request.getStudentDob());
            Student.setStudentClas(request.getStudentClas());
            Student.setStudentImage(request.getStudentImage());
            studentRepository.save(Student);

            return mapStudentToResponse(Student);
        } else {
            throw new EntityNotFoundException("Student with pid " + sid + " not found");
        }
    }

    public boolean deleteStudent(Long sid) {
        Student Student = studentRepository.findById(sid).get();

        if (Student != null) {
            studentRepository.deleteById(sid);
            return true;
        } else {
            return false;
        }
    }

    private StudentResponse mapStudentToResponse(Student student) {
        return StudentResponse.builder()
                .sid(student.getSid())
                .studentName(student.getStudentName())
                .studentRoll(student.getStudentRoll())
                .studentDob(student.getStudentDob())
                .studentClas(student.getStudentClas())
                .studentImage(student.getStudentImage())
                .build();
    }

    public ResponseEntity<Attendance> postAttendance(AttendanceRequest att) {
        var attendance = Attendance.builder().student(studentRepository.findById(att.getSid()).get())
                .isPresent(att.getIsPresent()).build();

        attendanceRepository.save(attendance);
        return ResponseEntity.ok().body(attendance);
    }

    public List<Attendance> getAttendance(Boolean isPresent) {
        return attendanceRepository.findAllByIsPresent(isPresent);
    }

}
