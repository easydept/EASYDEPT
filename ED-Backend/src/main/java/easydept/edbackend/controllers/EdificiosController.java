package easydept.edbackend.controllers;

import easydept.edbackend.entity.Edificio;
import easydept.edbackend.entity.Usuario;
import easydept.edbackend.services.EdificiosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

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

    @GetMapping("/admin/{idAdministrador}")
    public List<Edificio> getEdificiosAdministrador(@PathVariable Integer idAdministrador) {
        return this.edificiosService.getEdificiosAdmin(idAdministrador);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Edificio> getEdificioById(@PathVariable Integer id) {
        try {
            Edificio responseValue = edificiosService.getEdificioById(id);
            return new ResponseEntity<>(responseValue, HttpStatus.OK);
        }catch (NoSuchElementException ex) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEdificioById(@PathVariable Integer id) {
        edificiosService.deleteEdificioById(id);
        return ResponseEntity.noContent().build();
    }

}

