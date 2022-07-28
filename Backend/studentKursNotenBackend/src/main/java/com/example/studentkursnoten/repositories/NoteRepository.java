package com.example.studentkursnoten.repositories;

import com.example.studentkursnoten.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
