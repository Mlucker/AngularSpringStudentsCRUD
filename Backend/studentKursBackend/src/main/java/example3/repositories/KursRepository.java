package example3.repositories;

import example3.entities.Kurs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KursRepository extends JpaRepository <Kurs, Long> {
}
