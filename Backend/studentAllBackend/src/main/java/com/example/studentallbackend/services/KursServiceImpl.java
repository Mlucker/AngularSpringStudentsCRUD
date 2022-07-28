package com.example.studentallbackend.services;

import com.example.studentallbackend.entities.Kurs;
import com.example.studentallbackend.repositories.KursRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KursServiceImpl implements KursService{

    private KursRepository kursRepository;

    public KursServiceImpl(KursRepository kursRepository){
        this.kursRepository = kursRepository;
    }

    @Override
    public List<Kurs> getAllKurse() {
        return kursRepository.findAll();
    }

    @Override
    public Optional<Kurs> getKursById(Long id) {
        return kursRepository.findById(id);
    }

    @Override
    public Kurs createNewKurs(Kurs kurs) {
        return kursRepository.save(kurs);
    }

    @Override
    public void deleteKursById(Long id) {
        this.kursRepository.deleteById(id);
    }

    @Override
    public Kurs updateKurs(Kurs kurs) {
        return kursRepository.save(kurs);
    }

}
