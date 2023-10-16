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
    private String studentName;
    private String studentRoll;
    private String studentDob;
    private String studentClas;
    private String studentImage;
}
