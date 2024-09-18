package com.easydept.edbackend.controllers;

import com.easydept.edbackend.entity.Edificios;
import com.easydept.edbackend.services.EdificiosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/edificios")
public class EdificiosController {

    @Autowired
    private EdificiosService edificiosService;

    @PostMapping
    public Edificios createEdificio(@RequestBody Edificios edificios) {
        return edificiosService.saveEdificio(edificios);
    }

    // Otros endpoints si es necesario
}
