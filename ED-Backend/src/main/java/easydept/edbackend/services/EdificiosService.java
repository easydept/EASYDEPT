package easydept.edbackend.services;

import easydept.edbackend.entity.Edificio;
import easydept.edbackend.repositories.EdificiosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class EdificiosService {
    private final EdificiosRepository edificiosRepository;

    @Autowired
    public EdificiosService(EdificiosRepository edificiosRepository) {
        this.edificiosRepository = edificiosRepository;
    }

    @Transactional(readOnly = true)
    public List<Edificio> getAllEdificios() {
        return edificiosRepository.findAll();
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
    public Optional<Edificio> getEdificioById(Integer id) {
        return edificiosRepository.findById(id);
    }

}

