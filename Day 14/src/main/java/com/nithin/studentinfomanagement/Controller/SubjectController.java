package com.nithin.studentinfomanagement.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nithin.studentinfomanagement.Model.Subject;
import com.nithin.studentinfomanagement.Service.SubjectService;

@RestController
@RequestMapping("/api/subjects")
public class SubjectController {
	    @Autowired
	    private SubjectService subjectService;

	    @GetMapping("/getsubs")
	    public List<Subject> getAllSubjects() {
	        return subjectService.getAllSubjects();
	    }

	    @GetMapping("/{id}")
	    public Subject getSubjectById(@PathVariable int id) {
	        return subjectService.getSubjectById(id);
	    }

	    @PostMapping
	    public Subject createSubject(@RequestBody Subject subject) {
	        return subjectService.createSubject(subject);
	    }

	    @PutMapping("/{id}")
	    public Subject updateSubject(@PathVariable int id, @RequestBody Subject updatedSubject) {
	        return subjectService.updateSubject(id, updatedSubject);
	    }

	    @DeleteMapping("/{id}")
	    public void deleteSubject(@PathVariable int id) {
	        subjectService.deleteSubject(id);
	    }

}
