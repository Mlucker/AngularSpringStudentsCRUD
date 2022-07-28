package example1.services;

import example1.entities.Spind;

import java.util.List;
import java.util.Optional;

public interface SpindService {

    List<Spind> getAllSpinde();

    Optional<Spind> getSpindById(Long id);

    Spind createNewSpind(Spind spind);

    void deleteSpindById(Long id);

    Spind updateSpind(Spind spind);
}
