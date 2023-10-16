package com.nithin.studentinfo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nithin.studentinfo.dto.reponse.UserResponse;
import com.nithin.studentinfo.dto.request.UserRequest;
import com.nithin.studentinfo.repository.UserRepository;
import com.nithin.studentinfo.service.UserService;
import com.nithin.studentinfo.model.Subject;
import com.nithin.studentinfo.model.User;
import com.nithin.studentinfo.model.enumerate.Role;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private  UserRepository userRepository;

     @Override
    public List<UserResponse> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse getUser(Long uid) {
        User user = userRepository.findByUid(uid);
        return mapUserToUserResponse(user);
    }

    @Override
    public UserResponse updateUser(UserRequest request, Long uid) {
        User user = userRepository.findByUid(uid);
        User newUser = new User();
        if (user != null) {
            newUser = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(request.getPassword())
                    .role(request.getRole())
                    .isEnabled(request.getIsEnabled())
                    .clas(request.getClas())
                    .phone(request.getPhone())
                    .build();
            userRepository.save(newUser);
        }
        return mapUserToUserResponse(newUser);
    }

   

    private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .isEnabled(user.getIsEnabled())
                .clas(user.getClas())
                .phone(user.getPhone())
                .build();
    }


    // private String addSubject(int sid,Subject sub){
    //     sub.setStudent(studentRepository.findById(sid).get());
    //     subjectRepository.save(sub);
    // }
}
