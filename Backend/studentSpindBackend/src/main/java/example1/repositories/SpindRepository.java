package example1.repositories;

import example1.entities.Spind;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpindRepository extends JpaRepository <Spind, Long> {
}
