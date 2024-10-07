package com.easydept.edbackend.repositories;

import com.easydept.edbackend.entity.Rol;
import com.easydept.edbackend.entity.RolUsuario;
import com.easydept.edbackend.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolesRepository extends JpaRepository<Rol, Long> {
    Rol findByNombre(String name);
}
