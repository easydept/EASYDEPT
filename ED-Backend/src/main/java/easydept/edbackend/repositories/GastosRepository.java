package easydept.edbackend.repositories;

import easydept.edbackend.entity.Gasto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GastosRepository extends JpaRepository<Gasto, Integer> {
}
