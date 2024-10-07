package com.easydept.edbackend.controllers;

import com.easydept.edbackend.entity.Departamento;
import com.easydept.edbackend.services.DepartamentosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/departamentos")
public class DepartamentosController {

    @Autowired
    private DepartamentosService departamentosService;

    @PostMapping
    public Departamento createDepartamento(@RequestBody Departamento departamento) {
        return departamentosService.saveDepartamento(departamento);
    }
    @GetMapping
    public List<Departamento> getDepartamentos() {
        return this.departamentosService.getAllDepartamentos();
    }


    // Otros endpoints si es necesario
}
