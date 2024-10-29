package easydept.edbackend.controllers;

import easydept.edbackend.entity.Rol;
import easydept.edbackend.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roles")
public class RolesController {

    @Autowired
    private RolesService rolesService;

    @PostMapping
    public Rol createRol(@RequestBody Rol rol) {
        return rolesService.saveRol(rol);
    }
    @GetMapping
    public List<Rol> getRoles() {
        return this.rolesService.getAllRoles();
    }
}
