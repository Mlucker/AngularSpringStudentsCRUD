package example2.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

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

    @ManyToOne
    @JsonIgnoreProperties ("students")
    private Studiengang studiengang;

}
