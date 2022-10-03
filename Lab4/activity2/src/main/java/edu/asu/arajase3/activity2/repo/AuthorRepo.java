package edu.asu.arajase3.activity2.repo;

import edu.asu.arajase3.activity2.data.AuthorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepo extends JpaRepository<AuthorEntity, Integer> {


}
