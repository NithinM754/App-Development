package com.nithin.studentinfo.service;

import com.nithin.studentinfo.dto.reponse.AuthenticationResponse;
import com.nithin.studentinfo.dto.request.AuthenticationRequest;
import com.nithin.studentinfo.dto.request.RegisterRequest;

public interface AuthService {
     boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
