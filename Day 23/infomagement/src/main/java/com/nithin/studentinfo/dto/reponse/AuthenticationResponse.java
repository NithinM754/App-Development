package com.nithin.studentinfo.dto.reponse;



import com.nithin.studentinfo.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
    private String token;
    private String email;
    private Long uid;
    private String name;
    private Long phone; 
    private String role;

    private String clas;
}
