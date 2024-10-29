package easydept.edbackend.services;

import easydept.edbackend.entity.Reclamo;
import easydept.edbackend.repositories.ReclamosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ReclamosService {
    private final ReclamosRepository reclamosRepository;

    @Autowired
    public ReclamosService(ReclamosRepository reclamosRepository) {
        this.reclamosRepository = reclamosRepository;
    }

    public List<Reclamo> getAllReclamos() {
        return reclamosRepository.findAll();
    }

    @Transactional
    public Reclamo saveReclamo(Reclamo reclamo) {
        return reclamosRepository.save(reclamo);
    }
}