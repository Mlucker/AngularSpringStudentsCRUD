package com.example.studentallbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.List;
import java.util.stream.Collectors;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor

public class Kurs {

    @Id
    @GeneratedValue
    private Long id;

    private String kursname;

    //      Removes references to all related entities before deletion
    @PreRemove
    private void preRemove() {
        for (Student student : students) {
            List<Kurs> kurse = student.getKurse().stream()
                    .filter(kurs -> !kurs.getId().equals(this.id))
                    .collect(Collectors.toList());
            student.setKurse(kurse);
        }
        for (Note note : noten) {
            note.setKurs(null);
        }
        for (Studiengang studiengang : studiengaenge) {
            List<Kurs> kurse = studiengang.getKurse().stream()
                    .filter(kurs -> !kurs.getId().equals(this.id))
                    .collect(Collectors.toList());
            studiengang.setKurse(kurse);
        }
    }

    @ManyToMany(mappedBy = "kurse")
    @JsonIgnoreProperties({"kurse", "noten"})
    private List<Student> students;

    @OneToMany(mappedBy = "kurs")
    @JsonIgnoreProperties({"kurse"})
    private List<Note> noten;

    @ManyToMany(mappedBy = "kurse")
    private List<Studiengang> studiengaenge;
}
