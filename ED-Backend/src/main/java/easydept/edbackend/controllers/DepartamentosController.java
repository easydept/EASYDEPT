package easydept.edbackend.controllers;

import easydept.edbackend.entity.Departamento;
import easydept.edbackend.entity.Edificio;
import easydept.edbackend.entity.Usuario;
import easydept.edbackend.services.DepartamentosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/departamentos")
public class DepartamentosController {

    @Autowired
    private DepartamentosService departamentosService;

    @PostMapping
    public Departamento createDepartamento(@RequestBody Departamento departamento) {
        return departamentosService.saveDepartamento(departamento);
    }

    @GetMapping
    public List<Departamento> getDepartamentos() {
        return this.departamentosService.getAllDepartamentos();
    }

    @GetMapping("/{id}")
    public Optional<Departamento> getDepartamentoById(@PathVariable Integer id) {
        return departamentosService.getDepartamentoById(id);
    }

    @GetMapping("/edificio/{idEdificio}")
    public List<Departamento> getDepartamentosEdificio(@PathVariable Integer idEdificio) {
        return this.departamentosService.getDepartamentosEdificio(idEdificio);
    }

    @DeleteMapping("/{id}")
    public void deleteDepartamento(@PathVariable Integer id) {
        departamentosService.deleteDepartamentoById(id);
    }


    @PatchMapping("/{idDepartamento}/asignar-inquilino/{idInquilino}")
    public ResponseEntity<Departamento> asignarInquilino(
            @PathVariable Integer idDepartamento,
            @PathVariable Integer idInquilino) {
        Departamento departamento = departamentosService.asignarInquilino(idDepartamento, idInquilino);
        return ResponseEntity.ok(departamento);
    }

    @PatchMapping("/{idDepartamento}/asignar-propietario/{idPropietario}")
    public ResponseEntity<Departamento> asignarPropietario(
            @PathVariable Integer idDepartamento,
            @PathVariable Integer idPropietario) {
        Departamento departamento = departamentosService.asignarPropietario(idDepartamento, idPropietario);
        return ResponseEntity.ok(departamento);
    }
}
