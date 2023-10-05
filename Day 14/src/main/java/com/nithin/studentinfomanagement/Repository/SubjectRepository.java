package com.nithin.studentinfomanagement.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nithin.studentinfomanagement.Model.Subject;

@Repository
public interface SubjectRepository extends CrudRepository<Subject,Integer>{

}
