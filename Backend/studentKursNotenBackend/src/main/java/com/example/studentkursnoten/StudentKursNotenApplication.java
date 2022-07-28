package com.example.studentkursnoten;

import com.example.studentkursnoten.entities.Student;
import com.example.studentkursnoten.entities.Kurs;
import com.example.studentkursnoten.entities.Note;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class StudentKursNotenApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentKursNotenApplication.class, args);
    }

}
