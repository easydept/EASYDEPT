package com.easydept.edbackend.repositories;

import com.easydept.edbackend.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository extends JpaRepository<Usuario, Integer> {
    Usuario findByEmail(String email);
}
