package easydept.edbackend.repositories;

import easydept.edbackend.entity.Departamento;
import easydept.edbackend.entity.Edificio;
import easydept.edbackend.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DepartamentosRepository extends JpaRepository<Departamento, Integer> {
    Departamento findByIdDepartamento(Integer idDepartamento);
    List<Departamento> findByEdificio(Edificio edificio);
}
