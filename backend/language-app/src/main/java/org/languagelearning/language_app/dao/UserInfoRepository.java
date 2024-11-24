package org.languagelearning.language_app.dao;

import org.languagelearning.language_app.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserInfoRepository extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String username);
}