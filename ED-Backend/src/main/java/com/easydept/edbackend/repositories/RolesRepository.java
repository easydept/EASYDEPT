package com.easydept.edbackend.repositories;

import com.easydept.edbackend.entity.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolesRepository extends JpaRepository<Rol, Integer> {
    Rol findByNombre(String nombre);
}
