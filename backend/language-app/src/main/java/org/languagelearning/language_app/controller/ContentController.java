package org.languagelearning.language_app.controller;

import org.languagelearning.language_app.dto.request.user.AuthRequest;
import org.languagelearning.language_app.dto.request.user.LoginRequest;
import org.languagelearning.language_app.dto.response.ResponseLogin;
import org.languagelearning.language_app.entities.User;
import org.languagelearning.language_app.service.JwtService;
import org.languagelearning.language_app.service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class ContentController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @GetMapping("/home")
    public String handleWelcome(){
        return "Welcome home";
    }
    @GetMapping("/admin/home")
    public String handleAdminHome(){
        return "Welcome ADMIN home";
    }
    @GetMapping("/user/home")
    public String handleUserHome(){
        return "Welcome USER home";
    }
    @PostMapping("/authenticate")
    public ResponseEntity<ResponseLogin> authenticateAndGetToken(@RequestBody AuthRequest authRequest){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authRequest.getUsername(),authRequest.getPassword()
        ));
        if(authentication.isAuthenticated()){
           String token =  jwtService.generateToken(myUserDetailsService.loadUserByUsername(authRequest.getUsername()));
            ResponseLogin responseLogin = new ResponseLogin(authRequest.getUsername(),authRequest.getPassword());
            responseLogin.setToken(token);
            return ResponseEntity.ok(responseLogin);
                  }
        else{
            throw new UsernameNotFoundException("Invalid credentials");
        }
    }
}
