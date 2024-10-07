package com.easydept.edbackend.services;

import com.easydept.edbackend.entity.Departamento;
import com.easydept.edbackend.repositories.DepartamentosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class DepartamentosService {
    private final DepartamentosRepository departamentosRepository;

    @Autowired
    public DepartamentosService(DepartamentosRepository departamentosRepository) { this.departamentosRepository = departamentosRepository; }

    public List<Departamento> getAllDepartamentos() {
        return departamentosRepository.findAll();
    }

    @Transactional
    public Departamento saveDepartamento(Departamento departamento) { return departamentosRepository.save(departamento); }
}