package easydept.edbackend.controllers;

import easydept.edbackend.dtos.LoginRequest;
import easydept.edbackend.entity.Usuario;
import easydept.edbackend.services.AutenticacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
