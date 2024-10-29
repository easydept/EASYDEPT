package easydept.edbackend.services;

import easydept.edbackend.entity.Departamento;
import easydept.edbackend.entity.Edificio;
import easydept.edbackend.entity.Usuario;
import easydept.edbackend.repositories.DepartamentosRepository;
import easydept.edbackend.repositories.EdificiosRepository;
import easydept.edbackend.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EdificiosService {
    private final EdificiosRepository edificiosRepository;
    private final UsuariosRepository usuariosRepository;
    private final UsuariosService usuariosService;
    private final DepartamentosRepository departamentosRepository;

    @Autowired
    public EdificiosService(EdificiosRepository edificiosRepository, UsuariosRepository usuariosRepository, UsuariosService usuariosService, DepartamentosRepository departamentosRepository) {
        this.edificiosRepository = edificiosRepository;
        this.usuariosRepository = usuariosRepository;
        this.usuariosService = usuariosService;
        this.departamentosRepository = departamentosRepository;
    }

    @Transactional(readOnly = true)
    public List<Edificio> getAllEdificios() {
        return edificiosRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<Edificio> getEdificiosAdmin(Integer idAdmin) {
        Usuario admin = usuariosService.getUsuarioById(idAdmin);
        return edificiosRepository.findByAdministrador(admin);
    }

    @Transactional
    public Edificio saveEdificio(Edificio edificio) {
        return edificiosRepository.save(edificio);
    }

    @Transactional
    public void deleteEdificioById(Integer id) {
        edificiosRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public Edificio getEdificioById(Integer id) {
        return edificiosRepository.findById(id).orElseThrow();
    }


}

