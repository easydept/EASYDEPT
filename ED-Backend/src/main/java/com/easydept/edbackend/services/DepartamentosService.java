package com.easydept.edbackend.services;

import com.easydept.edbackend.entity.Departamento;
import com.easydept.edbackend.entity.Usuario;
import com.easydept.edbackend.repositories.DepartamentosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DepartamentosService {
    private final DepartamentosRepository departamentosRepository;
    private final UsuariosService usuariosService; // Inyectar el servicio de usuarios

    @Autowired
    public DepartamentosService(DepartamentosRepository departamentosRepository, UsuariosService usuariosService) {
        this.departamentosRepository = departamentosRepository;
        this.usuariosService = usuariosService;
    }

    public List<Departamento> getAllDepartamentos() {
        return departamentosRepository.findAll();
    }

    @Transactional
    public Departamento saveDepartamento(Departamento departamento) {
        return departamentosRepository.save(departamento);
    }

    @Transactional
    public Departamento asignarInquilino(Integer idDepartamento, Usuario inquilino) {
        Departamento departamento = departamentosRepository.findByIdDepartamento(idDepartamento);
        if (departamento != null) {
            // Validar si el usuario tiene el rol de inquilino
            if (usuariosService.tieneRolInquilino(inquilino)) {
                departamento.setInquilino(inquilino);
                return departamentosRepository.save(departamento);
            } else {
                throw new IllegalArgumentException("El usuario no tiene el rol de inquilino.");
            }
        }
        throw new IllegalArgumentException("Departamento no encontrado.");
    }

    @Transactional
    public Departamento asignarPropietario(Integer idDepartamento, Usuario propietario) {
        Departamento departamento = departamentosRepository.findByIdDepartamento(idDepartamento);
        if (departamento != null) {
            // Validar si el usuario tiene el rol de propietario
            if (usuariosService.tieneRolPropietario(propietario)) {
                departamento.setPropietario(propietario);
                return departamentosRepository.save(departamento);
            } else {
                throw new IllegalArgumentException("El usuario no tiene el rol de propietario.");
            }
        }
        throw new IllegalArgumentException("Departamento no encontrado.");
    }
}