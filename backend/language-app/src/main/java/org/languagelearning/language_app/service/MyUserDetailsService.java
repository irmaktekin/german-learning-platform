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
    @Autowired
    private UserRepo repo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("username"+username);
        User user = repo.findByUsername(username);
        System.out.println(user.getPassword());
        if(user==null){
            System.out.println("User not found");
            throw new UsernameNotFoundException("USER NOT FOUND");
        }
        return new UserPrincipal(user);
    }
}
