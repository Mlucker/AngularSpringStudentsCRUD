package example2.services;

import example2.entities.Studiengang;

import java.util.List;
import java.util.Optional;

public interface StudiengangService {

    List<Studiengang> getAllStudiengaenge();

    Optional<Studiengang> getStudiengangById(Long id);

    Studiengang createNewStudiengang(Studiengang studiengang);

    void deleteStudiengangById(Long id);

    Studiengang updateStudiengang(Studiengang studiengang);
}
