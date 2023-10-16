package com.nithin.studentinfo.dto.reponse;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StudentResponse {
    private Long sid;
    private String studentName;
    private String studentRoll;
    private String studentDob;
    private String studentClas;

    private String studentImage;
}
