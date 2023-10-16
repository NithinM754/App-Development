package com.nithin.studentinfo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import com.nithin.studentinfo.constant.Api;
import com.nithin.studentinfo.dto.reponse.StudentResponse;
import com.nithin.studentinfo.dto.request.StudentRequest;
import com.nithin.studentinfo.model.Student;
import com.nithin.studentinfo.service.StudentService;
import com.nithin.studentinfo.service.impl.StudentServiceImpl;
@RestController
@RequestMapping(Api.STUDENT)
@RequiredArgsConstructor
@Tag(name = "student")
public class StudentController {
    private final StudentServiceImpl studentService;
    @GetMapping
    public String index(){
        return "Welcome to Student Controller";
    }

    @PostMapping("/add")
    public ResponseEntity<String> saveProduct(@RequestBody StudentRequest request) {
        boolean isSaved = studentService.saveStudent(request);
        return isSaved ? ResponseEntity.status(201).body("Student added successfully!")
                : ResponseEntity.badRequest().build();
    }
     @GetMapping("/get")
    public ResponseEntity<List<StudentResponse>> getAllProducts() {
        List<StudentResponse> studentList = studentService.getAllStudents();
        return !studentList.isEmpty() ? ResponseEntity.status(200).body(studentList)
                : ResponseEntity.noContent().build();
    }

    

    @GetMapping("/find/{pid}")
    public ResponseEntity<StudentResponse> getProduct(@PathVariable Long sid) {
        StudentResponse studentResponse = studentService.getStudent(sid);
        return studentResponse != null ? ResponseEntity.ok().body(studentResponse) : ResponseEntity.notFound().build();
    }

    @PutMapping("/edit/{pid}")
    public ResponseEntity<StudentResponse> updateProduct(@RequestBody StudentRequest request, @PathVariable Long sid) {
        StudentResponse studentResponse = studentService.updateStudent(request, sid);
        return studentResponse != null ? ResponseEntity.ok().body(studentResponse) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{pid}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long sid) {
        boolean isDeleted = studentService.deleteStudent(sid);
        return isDeleted ? ResponseEntity.ok().body("Student deleted successfully!")
                : ResponseEntity.notFound().build();
    }
}
