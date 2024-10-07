package com.easydept.edbackend.services;

import com.easydept.edbackend.entity.Usuario;
import com.easydept.edbackend.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsuariosService {
    private final UsuariosRepository usuariosRepository;

    @Autowired
    public UsuariosService(UsuariosRepository usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }

    public List<Usuario> getAllUsuarios() {
        return usuariosRepository.findAll();
    }

    @Transactional
    public Usuario saveUsuario(Usuario usuario) {
        return usuariosRepository.save(usuario);
    }
}
