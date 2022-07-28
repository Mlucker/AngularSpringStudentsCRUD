package example2.repositories;

import example2.entities.Studiengang;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudiengangRepository extends JpaRepository <Studiengang, Long> {
}
