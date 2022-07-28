package com.example.studentkursnoten.services;

import com.example.studentkursnoten.entities.Note;
import com.example.studentkursnoten.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImpl implements NoteService{

    private NoteRepository noteRepository;

    public NoteServiceImpl(NoteRepository noteRepository){
        this.noteRepository = noteRepository;
    }

    @Override
    public List<Note> getAllNoten() {
        return noteRepository.findAll();
    }

    @Override
    public Optional<Note> getNoteById(Long id) {
        return noteRepository.findById(id);
    }

    @Override
    public Note createNewNote(Note note) {
        return noteRepository.save(note);
    }

    @Override
    public void deleteNoteById(Long id) {
        this.noteRepository.deleteById(id);
    }

    @Override
    public Note updateNote(Note note) {
        return noteRepository.save(note);
    }

}

