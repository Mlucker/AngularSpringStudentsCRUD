package com.example.studentallbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Spind {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer spindraum;

    //      Removes references to all related entities before deletion
    @PreRemove
    private void preRemove() {
        if (student != null) {
            student.setSpind(null);
        }
    }
    @OneToOne(mappedBy = "spind")
    @JsonIgnoreProperties("spind")
    private Student student;

}

