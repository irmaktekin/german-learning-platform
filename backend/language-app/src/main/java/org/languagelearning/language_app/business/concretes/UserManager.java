package org.languagelearning.language_app.business.concretes;

import org.languagelearning.language_app.business.abstracts.IUserService;
import org.languagelearning.language_app.dao.UserRepo;
import org.languagelearning.language_app.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserManager implements IUserService {

    private final UserRepo userRepo;
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

    @Autowired
    public UserManager(UserRepo userRepo) {
        this.userRepo = userRepo;

    }

    @Override
    public User register(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }
}
