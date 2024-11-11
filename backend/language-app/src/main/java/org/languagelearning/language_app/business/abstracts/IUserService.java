package org.languagelearning.language_app.business.abstracts;

import org.languagelearning.language_app.entities.User;

public interface IUserService {
    User getUserByName(String username);
}
