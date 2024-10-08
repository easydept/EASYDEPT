package com.easydept.edbackend.controllers;

import com.easydept.edbackend.entity.Usuario;
import com.easydept.edbackend.services.AutenticacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/autenticacion")
public class AutenticacionController {

    @Autowired
    private AutenticacionService autenticacionService;

    @PostMapping("/login")
    public Usuario login(@RequestParam String email, @RequestParam String password, @RequestParam String rol) {
        return autenticacionService.login(email, password, rol);
    }
}
