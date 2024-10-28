package easydept.edbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "departamento")
public class Departamento {

    // Getters y setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_departamento")
    private Integer idDepartamento;

    @ManyToOne
    @JoinColumn(name = "id_edificio", nullable = false)
    private Edificio edificio;

    @Column(name = "unidad", nullable = false)
    private String unidad;

    @Column(name = "numero_piso", nullable = false)
    private Integer numeroPiso;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_propietario")
    private Usuario propietario;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_inquilino")
    private Usuario inquilino;

    @Column(name = "ponderacion_expensas")
    private float ponderacionExpensas;

    // Constructor por defecto
    public Departamento() {
    }

    // Constructor completo
    public Departamento(Edificio edificio, String unidad, Integer numeroPiso, Usuario propietario, Usuario inquilino, float ponderacionExpensas) {
        this.edificio = edificio;
        this.unidad = unidad;
        this.numeroPiso = numeroPiso;
        this.propietario = propietario;
        this.inquilino = inquilino;
        this.ponderacionExpensas = ponderacionExpensas;
    }

    public void setEdificio(Edificio edificio) {
        this.edificio = edificio;
    }

    public void setUnidad(String unidad) {
        this.unidad = unidad;
    }

    public void setNumeroPiso(Integer numeroPiso) {
        this.numeroPiso = numeroPiso;
    }

    public void setPropietario(Usuario propietario) {
        this.propietario = propietario;
    }

    public void setInquilino(Usuario inquilino) {
        this.inquilino = inquilino;
    }

    public void setPonderacionExpensas(float ponderacionExpensas) { this.ponderacionExpensas = ponderacionExpensas; }
}