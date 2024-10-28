package easydept.edbackend.services;

import easydept.edbackend.entity.PermisoInquilino;
import easydept.edbackend.repositories.PermisosInquilinosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PermisosInquilinosService {
    private final PermisosInquilinosRepository permisosInquilinosRepository;

    @Autowired
    public PermisosInquilinosService(PermisosInquilinosRepository permisosInquilinosRepository) {
        this.permisosInquilinosRepository = permisosInquilinosRepository;
    }

    public List<PermisoInquilino> getAllPermisosInquilinos() {
        return permisosInquilinosRepository.findAll();
    }

    @Transactional
    public PermisoInquilino savePermisoInquilino(PermisoInquilino permisoInquilino) {
        return permisosInquilinosRepository.save(permisoInquilino);
    }
}
