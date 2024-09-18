package com.easydept.edbackend.services;

import com.easydept.edbackend.entity.Edificio;
import com.easydept.edbackend.repositories.EdificioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EdificioService {
    @Autowired
    private EdificioRepository edificioRepository;

    public Edificio saveEdificio(Edificio edificio) {
        return edificioRepository.save(edificio);
    }

    // Otros métodos de servicio
}
