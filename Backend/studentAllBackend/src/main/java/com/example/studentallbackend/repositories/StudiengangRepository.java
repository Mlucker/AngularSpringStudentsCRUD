package com.example.studentallbackend.repositories;

import com.example.studentallbackend.entities.Studiengang;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudiengangRepository extends JpaRepository<Studiengang, Long> {
}
