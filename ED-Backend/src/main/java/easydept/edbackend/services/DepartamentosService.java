package easydept.edbackend.services;

import easydept.edbackend.dtos.DeptoRequest;
import easydept.edbackend.entity.Departamento;
import easydept.edbackend.entity.Edificio;
import easydept.edbackend.entity.Usuario;
import easydept.edbackend.repositories.DepartamentosRepository;
import easydept.edbackend.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DepartamentosService {
    private final DepartamentosRepository departamentosRepository;
    private final UsuariosService usuariosService; // Inyectar el servicio de usuarios
    private final UsuariosRepository usuariosRepository;
    private final EdificiosService edificiosService;

    @Autowired
    public DepartamentosService(DepartamentosRepository departamentosRepository, UsuariosService usuariosService, UsuariosRepository usuariosRepository, EdificiosService edificiosService) {
        this.departamentosRepository = departamentosRepository;
        this.usuariosService = usuariosService;
        this.usuariosRepository = usuariosRepository;
        this.edificiosService = edificiosService;
    }
    @Transactional(readOnly = true)
    public List<Departamento> getAllDepartamentos() {
        return departamentosRepository.findAll();
    }

    @Transactional
    public List<Departamento> saveDepartamentos(Integer idEdificio, List<DeptoRequest> departamentosACrear) {
        Edificio edificio = edificiosService.getEdificioById(idEdificio);
        if(edificio.getCantidadUnidades() == departamentosACrear.size()) {
        List<Departamento> departamentos = new ArrayList<>();
        for (DeptoRequest depto : departamentosACrear) {
            Integer numeroPiso = depto.getNumeroPiso();
            String unidad = depto.getUnidad();
            Departamento nuevoDepto = new Departamento(edificio, unidad, numeroPiso, null, null, null);
            departamentos.add(nuevoDepto);
        }
        return departamentosRepository.saveAll(departamentos);}
        else {
            throw new IllegalArgumentException("La cantidad de departamentos a crear no es" +
                    "igual a la cantidad de unidades del edificio.");
        }
    }

    @Transactional(readOnly = true)
    public Optional<Departamento> getDepartamentoById(Integer id) {
        return departamentosRepository.findById(id);
    }

    @Transactional
    public void deleteDepartamentoById(Integer id) {
        departamentosRepository.deleteById(id);
    }

    @Transactional
    public Departamento asignarInquilino(Integer idDepartamento, Integer idInquilino) {
        Departamento departamento = departamentosRepository.findByIdDepartamento(idDepartamento);
        Usuario inquilino = usuariosService.getUsuarioById(idInquilino);
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
    public Departamento asignarPropietario(Integer idDepartamento, Integer idPropietario) {
        Departamento departamento = departamentosRepository.findByIdDepartamento(idDepartamento);
        Usuario propietario = usuariosService.getUsuarioById(idPropietario);
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

    @Transactional(readOnly = true)
    public List<Departamento> getDepartamentosEdificio(Integer idEdificio) {
        Edificio edificio = edificiosService.getEdificioById(idEdificio);
        return departamentosRepository.findByEdificio(edificio);
    }
}
