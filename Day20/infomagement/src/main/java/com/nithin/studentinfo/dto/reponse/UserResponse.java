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
public class UserResponse {
    private Long uid;
    private String name;
    private String email;
    private String password;
    private Boolean isEnabled;
    private Role role;
    private Long phone;    
    private String clas;
}
