package com.example.studentkursnoten.services;

import com.example.studentkursnoten.entities.Note;

import java.util.List;
import java.util.Optional;

public interface NoteService {

    List<Note> getAllNoten();

    Optional<Note> getNoteById(Long id);

    Note createNewNote(Note note);

    void deleteNoteById(Long id);

    Note updateNote(Note note);
}
