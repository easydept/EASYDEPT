package com.easydept.edbackend.repositories;

import com.easydept.edbackend.entity.Departamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartamentosRepository extends JpaRepository<Departamento, Long> {
    Departamento findByIdDepartamento(Integer idDepartamento);
}
