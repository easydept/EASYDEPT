package easydept.edbackend.services;

import easydept.edbackend.entity.Departamento;
import easydept.edbackend.entity.Edificio;
import easydept.edbackend.entity.Reclamo;
import easydept.edbackend.repositories.ReclamosRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReclamosService {
    private final ReclamosRepository reclamosRepository;
    private final EdificiosService edificiosService;

    @Autowired
    public ReclamosService(ReclamosRepository reclamosRepository, EdificiosService edificiosService) {
        this.reclamosRepository = reclamosRepository;
        this.edificiosService = edificiosService;
    }

    public List<Reclamo> getAllReclamos() {
        return reclamosRepository.findAll();
    }

    @Transactional
    public Reclamo saveReclamo(Reclamo reclamo) {
        return reclamosRepository.save(reclamo);
    }

    @Transactional(readOnly = true)
    public List<Reclamo> getReclamosEdificio(Integer idEdificio) {
        Edificio edificio = edificiosService.getEdificioById(idEdificio);
        return reclamosRepository.findByEdificio(edificio);
    }

    public List<Reclamo> getReclamosFiltrados(Integer idEdificio, String filtro) {
        Edificio edificio = edificiosService.getEdificioById(idEdificio);
        List<Reclamo> reclamos = reclamosRepository.findByEdificio(edificio);

        if ("Pendientes".equals(filtro)) {
            return reclamos.stream()
                    .filter(reclamo -> reclamo.getResolucion() == null)
                    .collect(Collectors.toList());
        } else if ("Resueltos".equalsIgnoreCase(filtro)) {
            return reclamos.stream()
                    .filter(reclamo -> reclamo.getResolucion() != null)
                    .collect(Collectors.toList());
        }
        // Si el filtro es "Todos" o cualquier otro valor, devuelve todos los reclamos
        return reclamos;
    }

    public Reclamo solucionarReclamo(Integer idReclamo, String resolucion) {
        Reclamo reclamo = reclamosRepository.findById(idReclamo).orElse(null);

        if (reclamo == null) {
            throw new EntityNotFoundException("Reclamo no encontrado con id: " + idReclamo);
        }
        reclamo.setResolucion(resolucion);
        reclamo.setFechaResolucion(new Date());
        return reclamosRepository.save(reclamo);
    }
}