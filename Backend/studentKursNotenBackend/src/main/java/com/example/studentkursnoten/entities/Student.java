package com.example.studentkursnoten.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnoreProperties ({"students", "noten"})
    private List<Kurs> kurse;

}
