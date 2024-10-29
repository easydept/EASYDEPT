package easydept.edbackend.controllers;

import easydept.edbackend.entity.Expensas;
import easydept.edbackend.services.ExpensasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expensas")
public class ExpensasController {

    @Autowired
    private ExpensasService expensasService;

    @PostMapping
    public Expensas createExpensas(@RequestBody Expensas expensas) {
        return expensasService.saveExpensas(expensas);
    }

    @GetMapping
    public List<Expensas> getExpensas() {
        return this.expensasService.getAllExpensas();
    }

}
