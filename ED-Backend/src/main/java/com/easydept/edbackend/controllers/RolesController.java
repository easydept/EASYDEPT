package com.easydept.edbackend.controllers;

import com.easydept.edbackend.entity.Rol;
import com.easydept.edbackend.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")
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


    // Otros endpoints si es necesario
}
