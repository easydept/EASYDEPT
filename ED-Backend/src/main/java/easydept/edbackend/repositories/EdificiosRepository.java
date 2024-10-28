package easydept.edbackend.repositories;

import easydept.edbackend.entity.Edificio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EdificiosRepository extends JpaRepository<Edificio, Integer> {
}
