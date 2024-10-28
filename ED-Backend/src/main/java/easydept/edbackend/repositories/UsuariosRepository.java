package easydept.edbackend.repositories;

import easydept.edbackend.entity.Departamento;
import easydept.edbackend.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository extends JpaRepository<Usuario, Integer> {
    Usuario findByEmail(String email);

//    @Query("SELECT p FROM Persona p WHERE p.edad BETWEEN :minEdad AND :maxEdad AND
//            LOWER(p.nombre) LIKE %:nombre%")
//            List<Persona> buscarPorEdadYNombre(int minEdad, int maxEdad, String nombre);
//} EJEMPLO DE QUERY QUE PODEMOS USAR
}
