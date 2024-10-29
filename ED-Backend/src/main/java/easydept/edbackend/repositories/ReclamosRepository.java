package easydept.edbackend.repositories;

import easydept.edbackend.entity.Departamento;
import easydept.edbackend.entity.Edificio;
import easydept.edbackend.entity.Reclamo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReclamosRepository extends JpaRepository<Reclamo, Integer> {
    List<Reclamo> findByEdificio(Edificio edificio);
}
