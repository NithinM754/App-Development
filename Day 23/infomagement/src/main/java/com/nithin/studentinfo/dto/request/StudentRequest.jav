package com.nithin.studentinfo.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StudentRequest {
    private Long sid;
    private String studentName;
    private String studentRoll;
    private String studentDOB;
    private String studentImage;
}
