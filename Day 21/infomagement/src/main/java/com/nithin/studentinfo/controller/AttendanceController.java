package com.nithin.studentinfo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nithin.studentinfo.constant.Api;
import com.nithin.studentinfo.dto.request.AttendanceRequest;
import com.nithin.studentinfo.model.Attendance;
import com.nithin.studentinfo.service.StudentService;
import com.nithin.studentinfo.service.impl.StudentServiceImpl;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.STUDENT)
@RequiredArgsConstructor
@Tag(name = "attendance")
public class AttendanceController {
    private final StudentServiceImpl studentService;

    @PostMapping("/attendance")
    public ResponseEntity<Attendance> attend(@RequestBody AttendanceRequest att) {
        return studentService.postAttendance(att);
    }

    @GetMapping("/getAttendance")
    public List<Attendance> getAttendances(@RequestParam Boolean isPresent){
        return studentService.getAttendance(isPresent);
    }

}
