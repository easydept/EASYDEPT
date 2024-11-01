package easydept.edbackend.services;

import easydept.edbackend.entity.Rol;
import easydept.edbackend.entity.RolUsuario;
import easydept.edbackend.entity.Usuario;
import easydept.edbackend.repositories.RolesRepository;
import easydept.edbackend.repositories.RolesUsuariosRepository;
import easydept.edbackend.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AutenticacionService {
    private final UsuariosRepository usuariosRepository;
    private final RolesUsuariosRepository rolesUsuariosRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final RolesRepository rolesRepository;

    @Autowired
    public AutenticacionService(UsuariosRepository usuariosRepository, RolesUsuariosRepository rolesUsuariosRepository, BCryptPasswordEncoder passwordEncoder, RolesRepository rolesRepository) {
        this.usuariosRepository = usuariosRepository;
        this.rolesUsuariosRepository = rolesUsuariosRepository;
        this.passwordEncoder = passwordEncoder;
        this.rolesRepository = rolesRepository;
    }

    public Usuario login(String email, String password, String rolNombre) {
        Usuario usuario = usuariosRepository.findByEmail(email);
        Rol rol = rolesRepository.findByNombre(rolNombre);
        if (usuario != null && passwordEncoder.matches(password, usuario.getPassword())) {
            RolUsuario rolUsuario = rolesUsuariosRepository.findByUsuarioAndRol(usuario, rol);
            if (rolUsuario != null) {
                return usuario; // Credenciales y rol correctos
            }
        }
        return null; // Credenciales incorrectas
    }
}
