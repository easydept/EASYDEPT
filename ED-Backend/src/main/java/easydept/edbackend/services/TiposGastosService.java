package easydept.edbackend.services;

import easydept.edbackend.entity.TipoGasto;
import easydept.edbackend.repositories.TiposGastosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TiposGastosService {
    private final TiposGastosRepository tiposGastosRepository;

    @Autowired
    public TiposGastosService(TiposGastosRepository tiposGastosRepository) {
        this.tiposGastosRepository = tiposGastosRepository;
    }

    public List<TipoGasto> getAllTiposGastos() {
        return tiposGastosRepository.findAll();
    }

    @Transactional
    public TipoGasto saveTipoGasto(TipoGasto tipoGasto) {
        return tiposGastosRepository.save(tipoGasto);
    }
}