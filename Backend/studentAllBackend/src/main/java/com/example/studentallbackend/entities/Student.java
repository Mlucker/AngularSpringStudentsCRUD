package com.example.studentallbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor

public class Student {

    @Id
    @GeneratedValue
    private Long id;

    private String nachname;

    private String vorname;

    private Date geburtsdatum;

    @OneToMany (mappedBy = "student", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties ({"student"})
    private List<Note> noten;

    @ManyToMany
    @JsonIgnoreProperties ({"students", "noten", "studiengaenge"})
    private List<Kurs> kurse;

    @ManyToOne
    @JsonIgnoreProperties ({"students", "kurse", "noten"})
    private Studiengang studiengang;

    @OneToOne
    @JsonIgnoreProperties ("student")
    private Spind spind;

}
