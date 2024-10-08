package com.easydept.edbackend.controllers;

import com.easydept.edbackend.dtos.LoginRequest;
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
    public Usuario login(@RequestBody LoginRequest loginRequest) {
        return autenticacionService.login(loginRequest.getEmail(), loginRequest.getPassword(), loginRequest.getRol());
    }
}
