package example3.services;

import example3.entities.Student;

import java.util.List;
import java.util.Optional;

public interface StudentService {

    List<Student> getAllStudents();

    Optional<Student> getStudentById(Long id);

    Student createNewStudent(Student student);

    void deleteStudentById(Long id);

    Student updateStudent(Student student);

}
