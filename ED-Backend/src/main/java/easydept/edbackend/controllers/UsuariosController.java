package easydept.edbackend.controllers;

import easydept.edbackend.dtos.ErrorResponse;
import easydept.edbackend.entity.Usuario;
import easydept.edbackend.services.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuariosController {

    @Autowired
    private UsuariosService usuariosService;

    @PostMapping
    public Object createUsuario(@RequestBody Usuario usuario, @RequestParam String nombreRol) {
        try {
            return usuariosService.saveUsuario(usuario, nombreRol); // Retorna el usuario creado
        } catch (IllegalArgumentException ex) {
            // Retornar un objeto de error si el usuario ya existe
            return new ErrorResponse(ex.getMessage()); // Crear una clase ErrorResponse
    }}

    @GetMapping
    public List<Usuario> getUsuarios() {
        return this.usuariosService.getAllUsuarios();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuariooById(@PathVariable Integer id) {
        try {
            Usuario responseValue = usuariosService.getUsuarioById(id);
            return new ResponseEntity<>(responseValue, HttpStatus.OK);
    }catch (NoSuchElementException ex) {
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);}
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
