package com.example.studentallbackend.repositories;

import com.example.studentallbackend.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
