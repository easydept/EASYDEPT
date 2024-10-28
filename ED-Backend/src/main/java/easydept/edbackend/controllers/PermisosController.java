package easydept.edbackend.controllers;

import easydept.edbackend.entity.Permiso;
import easydept.edbackend.services.PermisosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/permisos")
public class PermisosController {

    @Autowired
    private PermisosService permisosService;

    @PostMapping
    public Permiso createPermiso(@RequestBody Permiso permiso) {
        return permisosService.savePermiso(permiso);
    }
    @GetMapping
    public List<Permiso> getPermisos() {
        return this.permisosService.getAllPermisos();
    }


    // Otros endpoints si es necesario
}
