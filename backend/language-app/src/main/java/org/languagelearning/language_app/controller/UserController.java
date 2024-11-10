package org.languagelearning.language_app.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/teacher")
    public String teacherEndPoint(){
        return "Teacher";
    }
    @PreAuthorize("hasRole('STUDENT')")
    @GetMapping("/student")
    public String studentEndPoint(){
        return "Student";
    }
    @GetMapping("/admin")
    public String adminEndPoint(){
        return "Admin";
    }
}
