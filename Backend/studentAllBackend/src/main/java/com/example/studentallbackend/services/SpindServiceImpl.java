package com.example.studentallbackend.services;

import com.example.studentallbackend.entities.Spind;
import com.example.studentallbackend.repositories.SpindRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpindServiceImpl implements SpindService{

    SpindRepository spindRepository;

    public SpindServiceImpl(SpindRepository spindRepository){
        this.spindRepository = spindRepository;
    }

    @Override
    public List<Spind> getAllSpinde() {
        return spindRepository.findAll();
    }

    @Override
    public Optional<Spind> getSpindById(Long id) {
        return spindRepository.findById(id);
    }

    @Override
    public Spind createNewSpind(Spind spind) {
        return spindRepository.save(spind);
    }

    @Override
    public void deleteSpindById(Long id) {
        this.spindRepository.deleteById(id);
    }

    @Override
    public Spind updateSpind(Spind spind) {
        return spindRepository.save(spind);
    }
}
