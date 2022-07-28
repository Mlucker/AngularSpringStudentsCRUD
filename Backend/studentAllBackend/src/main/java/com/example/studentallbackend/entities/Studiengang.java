package com.example.studentallbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Studiengang {

    @Id
    @GeneratedValue
    private Long id;

    private String studiengang;

    //      Removes references to all related entities before deletion
    @PreRemove
    private void preRemove() {
        for (Student student : students) {
            student.setStudiengang(null);
        }
    }

    @OneToMany(mappedBy = "studiengang")
    @JsonIgnoreProperties({"studiengang", "kurse"})
    private List<Student> students;

    @ManyToMany
    @JsonIgnoreProperties({"students", "studiengaenge", "noten"})
    private List<Kurs> kurse;

}
