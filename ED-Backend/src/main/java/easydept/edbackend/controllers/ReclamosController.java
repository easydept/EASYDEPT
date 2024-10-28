package easydept.edbackend.controllers;

import easydept.edbackend.entity.Reclamo;
import easydept.edbackend.services.ReclamosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")
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
}