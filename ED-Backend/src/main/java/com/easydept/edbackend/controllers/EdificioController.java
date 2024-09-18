package com.easydept.edbackend.controllers;

import com.easydept.edbackend.entity.Edificio;
import com.easydept.edbackend.services.EdificioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/edificios")
public class EdificioController {

    @Autowired
    private EdificioService edificioService;

    @PostMapping
    public Edificio createEdificio(@RequestBody Edificio edificio) {
        return edificioService.saveEdificio(edificio);
    }

    // Otros endpoints si es necesario
}
