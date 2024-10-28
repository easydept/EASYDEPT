package easydept.edbackend.services;

import easydept.edbackend.entity.Rol;
import easydept.edbackend.repositories.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RolesService {
    private final RolesRepository rolesRepository;

    @Autowired
    public RolesService(RolesRepository rolesRepository) {
        this.rolesRepository = rolesRepository;
    }

    public List<Rol> getAllRoles() {
        return rolesRepository.findAll();
    }

    @Transactional
    public Rol saveRol(Rol rol) {
        return rolesRepository.save(rol);
    }
}