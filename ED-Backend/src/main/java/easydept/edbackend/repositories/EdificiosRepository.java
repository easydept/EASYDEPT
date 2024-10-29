package easydept.edbackend.repositories;

import easydept.edbackend.entity.Edificio;
import easydept.edbackend.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EdificiosRepository extends JpaRepository<Edificio, Integer> {
    List<Edificio> findByAdministrador(Usuario administrador);
}
