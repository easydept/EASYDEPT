package easydept.edbackend.controllers;

import easydept.edbackend.entity.TipoGasto;
import easydept.edbackend.services.TiposGastosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/tipos/gastos")
public class TiposGastosController {

    @Autowired
    private TiposGastosService tiposGastosService;

    @PostMapping
    public TipoGasto createTipoGasto(@RequestBody TipoGasto tipoGasto) {
        return tiposGastosService.saveTipoGasto(tipoGasto);
    }
    @GetMapping
    public List<TipoGasto> getTiposGastos() {
        return this.tiposGastosService.getAllTiposGastos();
    }
}
