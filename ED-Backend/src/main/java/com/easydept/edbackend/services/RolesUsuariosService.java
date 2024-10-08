package com.easydept.edbackend.services;

import com.easydept.edbackend.entity.RolUsuario;
import com.easydept.edbackend.repositories.RolesUsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class RolesUsuariosService {
    private final RolesUsuariosRepository rolesUsuariosRepository;

    @Autowired
    public RolesUsuariosService(RolesUsuariosRepository rolesUsuariosRepository) {
        this.rolesUsuariosRepository = rolesUsuariosRepository;
    }

    public List<RolUsuario> getAllRolesUsuarios() {
        return rolesUsuariosRepository.findAll();
    }

    @Transactional
    public RolUsuario saveRolUsuario(RolUsuario rolUsuario) {
        return rolesUsuariosRepository.save(rolUsuario);
    }
}
