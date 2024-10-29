package easydept.edbackend.controllers;

import easydept.edbackend.entity.RolUsuario;
import easydept.edbackend.services.RolesUsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roles/usuarios")
public class RolesUsuariosController {

    @Autowired
    private RolesUsuariosService rolesUsuariosService;

    @PostMapping
    public RolUsuario createRolUsuario(@RequestBody RolUsuario rolUsuario) {
        return rolesUsuariosService.saveRolUsuario(rolUsuario);
    }
    @GetMapping
    public List<RolUsuario> getRolesUsuarios() {
        return this.rolesUsuariosService.getAllRolesUsuarios();
    }


    // Otros endpoints si es necesario
}
