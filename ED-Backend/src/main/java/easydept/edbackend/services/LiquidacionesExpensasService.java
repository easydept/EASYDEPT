package easydept.edbackend.services;

import easydept.edbackend.entity.LiquidacionExpensas;
import easydept.edbackend.repositories.LiquidacionesExpensasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class LiquidacionesExpensasService {
    private final LiquidacionesExpensasRepository liquidacionesExpensasRepository;

    @Autowired
    public LiquidacionesExpensasService(LiquidacionesExpensasRepository liquidacionesExpensasRepository) {
        this.liquidacionesExpensasRepository = liquidacionesExpensasRepository;
    }

    public List<LiquidacionExpensas> getAllLiquidacionesExpensas() {
        return liquidacionesExpensasRepository.findAll();
    }

    @Transactional
    public LiquidacionExpensas saveLiquidacionExpensas(LiquidacionExpensas liquidacionExpensas) {
        return liquidacionesExpensasRepository.save(liquidacionExpensas);
    }
}
