package example3.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String kurs;

    //  Removes reference to Kurse before deletion
    @PreRemove
    private void preRemove() {
//        students.forEach(student ->
//            student.setKurse(student.getKurse().stream()
//                    .filter(kurs -> !kurs.getId().equals(this.id))
//                    .collect(Collectors.toList()))
//        );

        for (Student student : students) {
            List<Kurs> kurse = student.getKurse().stream()
                    .filter(kurs -> !kurs.getId().equals(this.id))
                    .collect(Collectors.toList());
            student.setKurse(kurse);
        }
    }

    @ManyToMany(mappedBy = "kurse")
    @JsonIgnoreProperties("kurse")
    private List<Student> students;

}
