package com.example.studentkursnoten.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor

public class Note {

    @Id
    @GeneratedValue
    private Long id;

    private Long note;

    @ManyToOne
    @JsonIgnoreProperties ({"noten", "students"})
//    @JsonIgnore
    private Kurs kurs;

    @ManyToOne
    @JsonIgnoreProperties ({"noten", "kurse"})
//    @JsonIgnore
    private Student student;

}
