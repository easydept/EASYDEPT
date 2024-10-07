package com.easydept.edbackend.controllers;

import com.easydept.edbackend.entity.PermisoInquilino;
import com.easydept.edbackend.services.PermisosInquilinosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/permisos/inquilinos")
public class PermisosInquilinosController {

    @Autowired
    private PermisosInquilinosService permisosInquilinosService;

    @PostMapping
    public PermisoInquilino createPermisoInquilino(@RequestBody PermisoInquilino permisoInquilino) {
        return permisosInquilinosService.savePermisoInquilino(permisoInquilino);
    }
    @GetMapping
    public List<PermisoInquilino> getPermisosInquilinos() {
        return this.permisosInquilinosService.getAllPermisosInquilinos();
    }


    // Otros endpoints si es necesario
}