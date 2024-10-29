package easydept.edbackend.services;

import easydept.edbackend.entity.Gasto;
import easydept.edbackend.repositories.GastosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class GastosService {
    private final GastosRepository gastosRepository;

    @Autowired
    public GastosService(GastosRepository gastosRepository) {
        this.gastosRepository = gastosRepository;
    }

    public List<Gasto> getAllGastos() {
        return gastosRepository.findAll();
    }

    @Transactional
    public Gasto saveGasto(Gasto gasto) {
        return gastosRepository.save(gasto);
    }
}
