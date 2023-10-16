package com.nithin.studentinfo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.nithin.studentinfo.model.Attendance;

public interface AttendanceRepository extends CrudRepository<Attendance,Long> {

    List<Attendance> findAllByIsPresent(Boolean isPresent);
    
}
