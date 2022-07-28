package com.example.studentallbackend.controller;

import com.example.studentallbackend.entities.Note;
import com.example.studentallbackend.services.NoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@CrossOrigin(value = "http://localhost:4200")
@RequestMapping("/api/note")
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public ResponseEntity<List<Note>> getAllNotes(){
        return ok(noteService.getAllNoten());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Note> findNoteById(@PathVariable Long id){
        return noteService.getNoteById(id)
                .map(note -> ok(note))
                .orElse(ResponseEntity.noContent().build());
    }

    @PostMapping
    public  ResponseEntity<Note> createNote(@RequestBody @Valid Note note){
        if (note.getId() != null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(noteService.createNewNote(note));
    }

    @PutMapping
    public ResponseEntity<Note> updateNote(@RequestBody @Valid Note note){
        if (note.getId() == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(noteService.updateNote(note));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNoteById(@PathVariable Long id){
        noteService.deleteNoteById(id);
        return ResponseEntity.ok().build();
    }

}
