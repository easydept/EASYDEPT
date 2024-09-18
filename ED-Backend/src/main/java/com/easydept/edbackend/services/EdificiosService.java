package com.easydept.edbackend.services;

import com.easydept.edbackend.entity.Edificio;
import com.easydept.edbackend.repositories.EdificiosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
public class EdificiosService {
    @Autowired
    private EdificiosRepository edificiosRepository;

    public ArrayList<Edificio> getAllEdificios() { return (ArrayList<Edificio>) edificiosRepository.findAll();}
    public Edificio saveEdificio(Edificio edificio) {
        return edificiosRepository.save(edificio);
    }

}
