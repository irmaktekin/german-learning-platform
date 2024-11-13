package org.languagelearning.language_app.business.concretes;

import org.languagelearning.language_app.business.abstracts.IUserService;
import org.languagelearning.language_app.dao.UserRepo;
import org.languagelearning.language_app.entities.User;
import org.languagelearning.language_app.service.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserManager implements IUserService {
    @Autowired
    private JWTService jwtService;

    private final UserRepo userRepo;
    private BCryptPasswordEncoder encoder= new BCryptPasswordEncoder(12);
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    public UserManager(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public User register(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    @Override
    public String verifyUser(User user) {
        Authentication authentication =
                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));

        if(authentication.isAuthenticated())
            return jwtService.generateToken(user.getUsername());
        return "fail";
    }
}
