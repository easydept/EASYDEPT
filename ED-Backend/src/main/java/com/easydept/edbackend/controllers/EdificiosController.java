package com.easydept.edbackend.controllers;

import com.easydept.edbackend.entity.Edificio;
import com.easydept.edbackend.services.EdificiosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@RestController
@RequestMapping("/edificios")
public class EdificiosController {

    @Autowired
    private EdificiosService edificiosService;

    @PostMapping
    public Edificio createEdificio(@RequestBody Edificio edificio) {
        return edificiosService.saveEdificio(edificio);
    }
    @GetMapping
    public ArrayList<Edificio> getEdificios() {
        return this.edificiosService.getAllEdificios();
    }


    // Otros endpoints si es necesario
}
