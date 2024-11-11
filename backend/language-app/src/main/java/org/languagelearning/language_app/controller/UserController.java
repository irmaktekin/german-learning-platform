package org.languagelearning.language_app.controller;

import org.languagelearning.language_app.business.abstracts.IUserService;
import org.languagelearning.language_app.dto.response.FilterByNameResponse;
import org.languagelearning.language_app.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private final IUserService userService;

    public UserController(IUserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user){
        System.out.println("user"+user.getId());
        System.out.println("user"+user.getUsername());

        return userService.register(user);
    }
}
