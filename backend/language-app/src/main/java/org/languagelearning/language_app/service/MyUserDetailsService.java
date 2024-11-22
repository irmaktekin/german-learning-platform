package org.languagelearning.language_app.service;

import org.languagelearning.language_app.entities.User;
import org.languagelearning.language_app.entities.UserPrincipal;
import org.languagelearning.language_app.dao.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {
    private final UserRepo repo;

    public MyUserDetailsService(UserRepo repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       return (UserDetails) repo.findByUsername(username)
               .orElseThrow(()->new UsernameNotFoundException("User Not Found"));
    }
}
