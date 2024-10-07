package com.easydept.edbackend.controllers;

import com.easydept.edbackend.entity.Usuario;
import com.easydept.edbackend.services.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuariosController {

    @Autowired
    private UsuariosService usuariosService;

    @PostMapping
    public Usuario createUsuario(@RequestBody Usuario usuario) {
        return usuariosService.saveUsuario(usuario);
    }
    @GetMapping
    public List<Usuario> getUsuarios() {
        return this.usuariosService.getAllUsuarios();
    }


    // Otros endpoints si es necesario
}
