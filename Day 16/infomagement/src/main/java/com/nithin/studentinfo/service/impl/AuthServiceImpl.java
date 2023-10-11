package com.nithin.studentinfo.service.impl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nithin.studentinfo.dto.reponse.AuthenticationResponse;
import com.nithin.studentinfo.dto.request.AuthenticationRequest;
import com.nithin.studentinfo.dto.request.RegisterRequest;
import com.nithin.studentinfo.repository.UserRepository;
import com.nithin.studentinfo.util.JwtUtil;
import com.nithin.studentinfo.model.User;
import com.nithin.studentinfo.model.enumerate.Role;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import com.nithin.studentinfo.service.AuthService;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

     private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .clas(request.getClas())
                    .phone(request.getPhone())
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .uid(user.getUid())
                .email(user.getEmail())
                .name(user.getName())
                // .role(user.getRole())
                .clas(user.getClas())
                .phone(user.getPhone())
                .build();
    }
}
