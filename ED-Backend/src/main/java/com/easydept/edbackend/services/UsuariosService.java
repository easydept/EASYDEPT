package com.easydept.edbackend.services;

import com.easydept.edbackend.entity.Edificio;
import com.easydept.edbackend.entity.Rol;
import com.easydept.edbackend.entity.RolUsuario;
import com.easydept.edbackend.entity.Usuario;
import com.easydept.edbackend.repositories.RolesRepository;
import com.easydept.edbackend.repositories.RolesUsuariosRepository; // Asegúrate de importar el repositorio adecuado
import com.easydept.edbackend.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UsuariosService {
    private final UsuariosRepository usuariosRepository;
    private final RolesUsuariosRepository rolesUsuariosRepository; // Incluir el repositorio para roles
    private final RolesRepository rolesRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UsuariosService(UsuariosRepository usuariosRepository, RolesUsuariosRepository rolesUsuariosRepository, RolesRepository rolesRepository, BCryptPasswordEncoder passwordEncoder) {
        this.usuariosRepository = usuariosRepository;
        this.rolesUsuariosRepository = rolesUsuariosRepository;
        this.rolesRepository = rolesRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<Usuario> getAllUsuarios() {
        return usuariosRepository.findAll();
    }

    @Transactional
    public Usuario saveUsuario(Usuario usuario, String nombreRol) {
        if(usuariosRepository.findByEmail(usuario.getEmail()) == null) {
            String encryptedPassword = passwordEncoder.encode(usuario.getPassword());
            usuario.setPassword(encryptedPassword);
            Rol rolUsuario = rolesRepository.findByNombre(nombreRol);
            if (rolUsuario == null) {
                throw new IllegalArgumentException("El rol " + nombreRol + " no existe.");
            }
            Usuario usuarioCreado = usuariosRepository.save(usuario);
            RolUsuario rolUsuario1 = new RolUsuario(usuarioCreado, rolUsuario);
            rolesUsuariosRepository.save(rolUsuario1);
            return usuarioCreado;
        }
        else{
            throw new IllegalArgumentException("El usuario con el email " + usuario.getEmail() + " ya existe.");
        }
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