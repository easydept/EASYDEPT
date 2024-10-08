package com.easydept.edbackend.controllers;

import com.easydept.edbackend.entity.Edificio;
import com.easydept.edbackend.entity.Usuario;
import com.easydept.edbackend.services.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3001")
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

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuariooById(@PathVariable Integer id) {
        Optional<Usuario> usuario = usuariosService.getUsuarioById(id);
        return usuario.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/inquilino")
    public boolean tieneRolInquilino(@RequestBody Usuario usuario) {
        return usuariosService.tieneRolInquilino(usuario);
    }

    @GetMapping("/propietario")
    public boolean tieneRolPropietario(@RequestBody Usuario usuario) {
        return usuariosService.tieneRolPropietario(usuario);
    }
}
