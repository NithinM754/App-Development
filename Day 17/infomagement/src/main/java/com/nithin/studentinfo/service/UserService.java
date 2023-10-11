package com.nithin.studentinfo.service;

import java.util.List;

import com.nithin.studentinfo.dto.reponse.UserResponse;
import com.nithin.studentinfo.dto.request.UserRequest;

public interface UserService {
    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    // boolean deleteProduct(Long uid);

    // CountResponse userCount();
}
