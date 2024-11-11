package org.languagelearning.language_app.business.concretes;

import org.languagelearning.language_app.business.abstracts.IUserService;
import org.languagelearning.language_app.dao.UserRepo;
import org.languagelearning.language_app.entities.User;
import org.springframework.stereotype.Service;

@Service
public class UserManager implements IUserService {
    private final UserRepo userRepo;

    public UserManager(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public User getUserByName(String username) {
        return this.userRepo.findByUsername(username);
    }
}
