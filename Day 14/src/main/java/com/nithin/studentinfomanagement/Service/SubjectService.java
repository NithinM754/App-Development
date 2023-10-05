package com.nithin.studentinfomanagement.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nithin.studentinfomanagement.Model.Subject;
import com.nithin.studentinfomanagement.Repository.SubjectRepository;

@Service
public class SubjectService {
    @Autowired
    private SubjectRepository subjectRepo;

    public List<Subject> getAllSubjects() {
        return (List<Subject>) subjectRepo.findAll();
    }

    public Subject getSubjectById(int id) {
        return subjectRepo.findById(id).orElse(null);
    }

    public Subject createSubject(Subject subject) {
        return subjectRepo.save(subject);
    }

    public Subject updateSubject(int id, Subject updatedSubject) {
        if (subjectRepo.existsById(id)) {
            updatedSubject.setId(id);
            return subjectRepo.save(updatedSubject);
        }
        return null;
    }

    public void deleteSubject(int id) {
        subjectRepo.deleteById(id);
    }
}