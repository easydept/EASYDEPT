package easydept.edbackend.controllers;

import easydept.edbackend.entity.Gasto;
import easydept.edbackend.services.GastosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/gastos")
public class GastosController {

    @Autowired
    private GastosService gastosService;

    @PostMapping
    public Gasto createGasto(@RequestBody Gasto gasto) {
        return gastosService.saveGasto(gasto);
    }
    @GetMapping
    public List<Gasto> getGastos() {
        return this.gastosService.getAllGastos();
    }

}
