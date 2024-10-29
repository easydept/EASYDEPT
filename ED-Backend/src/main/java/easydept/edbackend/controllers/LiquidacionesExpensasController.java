package easydept.edbackend.controllers;

import easydept.edbackend.entity.LiquidacionExpensas;
import easydept.edbackend.services.LiquidacionesExpensasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/liquidaciones/expensas")
public class LiquidacionesExpensasController {

    @Autowired
    private LiquidacionesExpensasService liquidacionesExpensasService;

    @PostMapping
    public LiquidacionExpensas createLiquidacionExpensas(@RequestBody LiquidacionExpensas liquidacionExpensas) {
        return liquidacionesExpensasService.saveLiquidacionExpensas(liquidacionExpensas);
    }
    @GetMapping
    public List<LiquidacionExpensas> getLiquidacionesExpensas() {
        return this.liquidacionesExpensasService.getAllLiquidacionesExpensas();
    }
}
