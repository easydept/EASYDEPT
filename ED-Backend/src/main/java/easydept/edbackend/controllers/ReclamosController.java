package easydept.edbackend.controllers;

import easydept.edbackend.entity.Reclamo;
import easydept.edbackend.services.ReclamosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reclamos")
public class ReclamosController {

    @Autowired
    private ReclamosService reclamosService;

    @PostMapping
    public Reclamo createReclamo(@RequestBody Reclamo reclamo) {
        return reclamosService.saveReclamo(reclamo);
    }

    @GetMapping
    public List<Reclamo> getReclamos() {
        return this.reclamosService.getAllReclamos();
    }

    @GetMapping("/edificio/{idEdificio}")
    public List<Reclamo> getReclamosEdificio(@PathVariable Integer idEdificio) {
        return this.reclamosService.getReclamosEdificio(idEdificio);
    }

    @PatchMapping("/solucionar/{idReclamo}")
    public ResponseEntity<Reclamo> solucionarReclamo(
            @PathVariable Integer idReclamo,
            @RequestBody String resolucion) {

        Reclamo reclamoResuelto = reclamosService.solucionarReclamo(idReclamo, resolucion);
        return ResponseEntity.ok(reclamoResuelto);
    }
}