package example2.services;

import example2.entities.Student;
import example2.entities.Studiengang;
import example2.repositories.StudentRepository;
import example2.repositories.StudiengangRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudiengangServiceImpl implements StudiengangService{

    StudiengangRepository studiengangRepository;
    StudentRepository studentRepository;

    public StudiengangServiceImpl(StudiengangRepository studiengangRepository, StudentRepository studentRepository){
        this.studiengangRepository = studiengangRepository;
        this.studentRepository = studentRepository;
    }

    @Override
    public List<Studiengang> getAllStudiengaenge() {
        return studiengangRepository.findAll();
    }

    @Override
    public Optional<Studiengang> getStudiengangById(Long id) {
        return studiengangRepository.findById(id);
    }

    @Override
    public Studiengang createNewStudiengang(Studiengang studiengang) {
        return saveStudiengangWithStudents(studiengang);
    }

    @Override
    public void deleteStudiengangById(Long id) {
        this.studiengangRepository.deleteById(id);
    }

    @Override
    public Studiengang updateStudiengang(Studiengang studiengang) {
        return saveStudiengangWithStudents(studiengang);
    }

    private Studiengang saveStudiengangWithStudents(Studiengang studiengang) {
        List<Student> students = studiengang.getStudents();
        students.stream()
                .map(student -> studentRepository.findById(student.getId()))
                .filter(optionalStudent -> optionalStudent.isPresent())
                .forEach(optionalStudent -> {
                    Student student = optionalStudent.get();
                    student.setStudiengang(studiengang);
                    studentRepository.save(student);
                });
        return studiengangRepository.save(studiengang);
    }
}



