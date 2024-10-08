package com.easydept.edbackend.services;

import com.easydept.edbackend.entity.Edificio;
import com.easydept.edbackend.entity.Rol;
import com.easydept.edbackend.entity.Usuario;
import com.easydept.edbackend.repositories.RolesRepository;
import com.easydept.edbackend.repositories.RolesUsuariosRepository; // Asegúrate de importar el repositorio adecuado
import com.easydept.edbackend.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UsuariosService {
    private final UsuariosRepository usuariosRepository;
    private final RolesUsuariosRepository rolesUsuariosRepository; // Incluir el repositorio para roles
    private final RolesRepository rolesRepository;

    @Autowired
    public UsuariosService(UsuariosRepository usuariosRepository, RolesUsuariosRepository rolesUsuariosRepository, RolesRepository rolesRepository) {
        this.usuariosRepository = usuariosRepository;
        this.rolesUsuariosRepository = rolesUsuariosRepository;
        this.rolesRepository = rolesRepository;
    }

    public List<Usuario> getAllUsuarios() {
        return usuariosRepository.findAll();
    }

    @Transactional
    public Usuario saveUsuario(Usuario usuario) {
        return usuariosRepository.save(usuario);
    }

    @Transactional(readOnly = true)
    public Optional<Usuario> getUsuarioById(Integer id) {
        return usuariosRepository.findById(id);
    }

    // Verificar si el usuario tiene el rol de inquilino
    public boolean tieneRolInquilino(Usuario usuario) {
        Rol rol = rolesRepository.findByNombre("Inquilino");
        return (rolesUsuariosRepository.findByUsuarioAndRol(usuario, rol)) != null;
    }

    // Verificar si el usuario tiene el rol de propietario
    public boolean tieneRolPropietario(Usuario usuario) {
        Rol rol = rolesRepository.findByNombre("Propietario");
        return (rolesUsuariosRepository.findByUsuarioAndRol(usuario, rol)) != null;
    }
}