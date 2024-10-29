package easydept.edbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Entity
@Table(name = "reclamo")
public class Reclamo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reclamo")
    private Integer idReclamo;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_emisor", nullable = false)
    private Usuario emisor;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_edificio", nullable = false)
    private Edificio edificio;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_departamento", nullable = false)
    private Departamento departamento;

    @Setter
    @Column(name = "fecha_emision")
    private Date fechaEmision;

    @Setter
    @Column(name = "asunto")
    private String asunto;

    @Setter
    @Column(name = "descripcion")
    private String descripcion;

    @Setter
    @Column(name = "resolucion")
    private String resolucion;

    @Setter
    @Column(name = "fecha_resolucion")
    private Date fechaResolucion;

    public Reclamo(Usuario emisor, Edificio edificio, Departamento departamento, Date fechaEmision, String asunto, String descripcion, String resolucion, Date fechaResolucion) {
        this.emisor = emisor;
        this.edificio = edificio;
        this.departamento = departamento;
        this.fechaEmision = fechaEmision;
        this.asunto = asunto;
        this.descripcion = descripcion;
        this.resolucion = resolucion;
        this.fechaResolucion = fechaResolucion;
    }

    public Reclamo() {}
}