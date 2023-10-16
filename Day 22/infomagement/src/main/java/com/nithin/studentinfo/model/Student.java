package com.nithin.studentinfo.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
@Table(name = "_student")
public class Student {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long sid;
  private String studentName;
  private String studentRoll;
  private String studentDob;
  private String studentImage;
  private String studentClas;

  @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
  private List<Subject> subjects = new ArrayList<>();

  @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
  private List<Attendance> attendances = new ArrayList<>();
}
