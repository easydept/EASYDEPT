package easydept.edbackend.repositories;

import easydept.edbackend.entity.Rol;
import easydept.edbackend.entity.RolUsuario;
import easydept.edbackend.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolesUsuariosRepository extends JpaRepository<RolUsuario, Integer> {
    RolUsuario findByUsuarioAndRol(Usuario usuario, Rol rol);

}
