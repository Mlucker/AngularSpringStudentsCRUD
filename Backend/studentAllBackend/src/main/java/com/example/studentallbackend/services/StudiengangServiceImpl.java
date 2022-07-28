package com.example.studentallbackend.services;

import com.example.studentallbackend.entities.Studiengang;
import com.example.studentallbackend.repositories.StudiengangRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudiengangServiceImpl implements StudiengangService {

    StudiengangRepository studiengangRepository;

    public StudiengangServiceImpl(StudiengangRepository studiengangRepository){
        this.studiengangRepository = studiengangRepository;
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
        return studiengangRepository.save(studiengang);
    }

    @Override
    public void deleteStudiengangById(Long id) {
        this.studiengangRepository.deleteById(id);
    }

    @Override
    public Studiengang updateStudiengang(Studiengang studiengang) {
        return studiengangRepository.save(studiengang);
    }

}
