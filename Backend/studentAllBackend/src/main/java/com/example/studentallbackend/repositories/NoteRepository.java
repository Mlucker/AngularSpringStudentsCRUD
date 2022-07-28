package com.example.studentallbackend.repositories;

import com.example.studentallbackend.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
