package example1.controller;


import example1.entities.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import example1.services.StudentService;
import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@CrossOrigin(value = "http://localhost:4200")
@RequestMapping("/api/student")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents(){
        return ok(studentService.getAllStudents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> findStudentById(@PathVariable Long id){
        return studentService.getStudentById(id)
                .map(student -> ok(student))
                .orElse(ResponseEntity.noContent().build());
    }

    @PostMapping
    public  ResponseEntity<Student> createStudent(@RequestBody @Valid Student student){
        if (student.getId() != null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(studentService.createNewStudent(student));
    }

    @PutMapping
    public ResponseEntity<Student> updateStudent(@RequestBody @Valid Student student){
        if (student.getId() == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(studentService.updateStudent(student));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudentById(@PathVariable Long id){
        studentService.deleteStudentById(id);
        return ResponseEntity.ok().build();
    }

}
