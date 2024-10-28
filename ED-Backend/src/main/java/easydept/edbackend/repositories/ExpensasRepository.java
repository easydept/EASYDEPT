package easydept.edbackend.repositories;

import easydept.edbackend.entity.Expensas;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpensasRepository extends JpaRepository<Expensas, Integer> {
}
