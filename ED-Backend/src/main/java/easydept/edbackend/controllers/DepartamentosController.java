package easydept.edbackend.controllers;

import easydept.edbackend.entity.Departamento;
import easydept.edbackend.services.DepartamentosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3001")
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

    @DeleteMapping("/{id}")
    public void deleteDepartamento(@PathVariable Integer id) {
        departamentosService.deleteDepartamentoById(id);
    }

//    @PostMapping("/{idDepartamento}/asignar-inquilino")
//    public Departamento asignarInquilino(@PathVariable Integer idDepartamento, @RequestBody Usuario inquilino) {
//        return departamentosService.asignarInquilino(idDepartamento, inquilino);
//    }
//
//    @PostMapping("/{idDepartamento}/asignar-propietario")
//    public Departamento asignarPropietario(@PathVariable Integer idDepartamento, @RequestBody Usuario propietario) {
//        return departamentosService.asignarPropietario(idDepartamento, propietario);
//    }
}