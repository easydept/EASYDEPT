package easydept.edbackend.services;

import easydept.edbackend.entity.Permiso;
import easydept.edbackend.repositories.PermisosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PermisosService {
    private final PermisosRepository permisosRepository;

    @Autowired
    public PermisosService(PermisosRepository permisosRepository) { this.permisosRepository = permisosRepository; }

    public List<Permiso> getAllPermisos() {
        return permisosRepository.findAll();
    }

    @Transactional
    public Permiso savePermiso(Permiso permiso) { return permisosRepository.save(permiso); }
}