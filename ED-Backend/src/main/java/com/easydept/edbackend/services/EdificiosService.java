package com.easydept.edbackend.services;

import com.easydept.edbackend.entity.Edificio;
import com.easydept.edbackend.repositories.EdificiosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class EdificiosService {
    private final EdificiosRepository edificiosRepository;

    @Autowired
    public EdificiosService(EdificiosRepository edificiosRepository) {
        this.edificiosRepository = edificiosRepository;
    }

    public List<Edificio> getAllEdificios() {
        return edificiosRepository.findAll();
    }

    @Transactional
    public Edificio saveEdificio(Edificio edificio) {
        return edificiosRepository.save(edificio);
    }

    @Transactional
    public void deleteEdificio(Integer idEdificio) {
        if (edificiosRepository.existsById(idEdificio)) {
            edificiosRepository.deleteById(idEdificio);
        } else {
            throw new RuntimeException("Edificio no encontrado con ID: " + idEdificio);
        }
    }

    @Transactional(readOnly = true)
    public Edificio getEdificioById(Integer idEdificio) {
        return edificiosRepository.findById(idEdificio)
                .orElseThrow(() -> new RuntimeException("Edificio no encontrado con ID: " + idEdificio));
    }
}