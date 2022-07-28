package com.example.studentallbackend.repositories;

import com.example.studentallbackend.entities.Kurs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KursRepository extends JpaRepository <Kurs, Long> {
}
