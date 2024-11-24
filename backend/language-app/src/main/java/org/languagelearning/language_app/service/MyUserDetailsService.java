package org.languagelearning.language_app.service;

import org.languagelearning.language_app.entities.User;
import org.languagelearning.language_app.dao.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {
    private final UserInfoRepository repository;

    public MyUserDetailsService(UserInfoRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        Optional <User> user = repository.findByUsername(username);
        if(user.isPresent()){
            var userObj = user.get();
            return org.springframework.security.core.userdetails.User.builder()
                    .username(userObj.getUsername())
                    .password(userObj.getPassword())
                    .roles(getRoles(userObj))
                    .build();
        }
        else{
            throw new UsernameNotFoundException(username);
        }

    }
    private String [] getRoles(User user){
        if(user.getRole()==null){
            return new String[]{"USER"};
        }
        return  user.getRole().split(",");
    }

}
