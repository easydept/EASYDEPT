package com.easydept.edbackend.services;

import com.easydept.edbackend.entity.Edificios;
import com.easydept.edbackend.repositories.EdificiosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EdificiosService {
    @Autowired
    private EdificiosRepository edificiosRepository;

    public Edificios saveEdificio(Edificios edificios) {
        return edificiosRepository.save(edificios);
    }

    // Otros métodos de servicio
}
