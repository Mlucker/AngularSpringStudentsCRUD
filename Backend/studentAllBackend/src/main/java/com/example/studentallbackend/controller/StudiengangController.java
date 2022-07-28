package com.example.studentallbackend.controller;

import com.example.studentallbackend.entities.Studiengang;
import com.example.studentallbackend.services.StudiengangService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@CrossOrigin(value = "http://localhost:4200")
@RequestMapping("/api/studiengang")
public class StudiengangController {

    private final StudiengangService studiengangService;

    public StudiengangController(StudiengangService studiengangService) {
        this.studiengangService = studiengangService;
    }

    @GetMapping
    public ResponseEntity<List<Studiengang>> getAllStudiengaenge(){
        return ok(studiengangService.getAllStudiengaenge());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Studiengang> findStudiengangById(@PathVariable Long id){
        return studiengangService.getStudiengangById(id)
                .map(studiengang -> ok(studiengang))
                .orElse(ResponseEntity.noContent().build());
    }

    @PostMapping
    public  ResponseEntity<Studiengang> createStudiengang(@RequestBody @Valid Studiengang studiengang){
        if (studiengang.getId() != null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(studiengangService.createNewStudiengang(studiengang));
    }

    @PutMapping
    public ResponseEntity<Studiengang> updateStudiengang(@RequestBody @Valid Studiengang studiengang){
        if (studiengang.getId() == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(studiengangService.updateStudiengang(studiengang));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudiengangById(@PathVariable Long id){
        studiengangService.deleteStudiengangById(id);
        return ResponseEntity.ok().build();
    }

}
