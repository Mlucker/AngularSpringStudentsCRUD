package example3.services;
import example3.entities.Kurs;

import java.util.List;
import java.util.Optional;

public interface KursService {

    List<Kurs> getAllKurse();

    Optional<Kurs> getKursById(Long id);

    Kurs createNewKurs(Kurs kurs);

    void deleteKursById(Long id);

    Kurs updateKurs(Kurs kurs);
}
