package com.example.studentkursnoten.repositories;

import com.example.studentkursnoten.entities.Kurs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KursRepository extends JpaRepository<Kurs, Long> {
}
