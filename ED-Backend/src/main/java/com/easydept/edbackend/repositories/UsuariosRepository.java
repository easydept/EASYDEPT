package com.easydept.edbackend.repositories;

import com.easydept.edbackend.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository extends JpaRepository<Usuario, Long> {
    // Método para buscar un usuario por su email
    Usuario findByEmail(String email);
}
