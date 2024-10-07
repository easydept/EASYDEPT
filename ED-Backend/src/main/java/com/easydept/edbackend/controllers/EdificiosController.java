package com.easydept.edbackend.controllers;

import com.easydept.edbackend.entity.Edificio;
import com.easydept.edbackend.services.EdificiosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.ArrayList;
import java.util.List;

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
    public List<Edificio> getEdificios() {
        return this.edificiosService.getAllEdificios();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEdificio(@PathVariable Integer id) {
        edificiosService.deleteEdificio(id);
        return ResponseEntity.noContent().build(); // Devuelve un 204 No Content
    }

    @GetMapping("/{id}")
    public Edificio getEdificioById(@PathVariable Integer id) {
        return edificiosService.getEdificioById(id);
    }

}
