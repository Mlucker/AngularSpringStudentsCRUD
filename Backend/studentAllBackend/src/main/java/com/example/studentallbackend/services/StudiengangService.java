package com.example.studentallbackend.services;

import com.example.studentallbackend.entities.Studiengang;

import java.util.List;
import java.util.Optional;

public interface StudiengangService {

    List<Studiengang> getAllStudiengaenge();

    Optional<Studiengang> getStudiengangById(Long id);

    Studiengang createNewStudiengang(Studiengang studiengang);

    void deleteStudiengangById(Long id);

    Studiengang updateStudiengang(Studiengang studiengang);
}
