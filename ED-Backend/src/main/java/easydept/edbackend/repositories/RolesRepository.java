package easydept.edbackend.repositories;

import easydept.edbackend.entity.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolesRepository extends JpaRepository<Rol, Integer> {
    Rol findByNombre(String nombre);
}
