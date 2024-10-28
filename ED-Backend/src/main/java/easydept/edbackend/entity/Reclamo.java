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
    @JoinColumn(name = "id_destinatario", nullable = false)
    private Usuario destinatario;

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
    @Column(name = "resuelto")
    private boolean resuelto;

    @Setter
    @Column(name = "fecha_resolucion")
    private Date fechaResolucion;

    public Reclamo(Usuario emisor, Usuario destinatario, Date fechaEmision, String asunto, String descripcion, boolean resuelto, Date fechaResolucion) {
        this.emisor = emisor;
        this.destinatario = destinatario;
        this.fechaEmision = fechaEmision;
        this.asunto = asunto;
        this.descripcion = descripcion;
        this.resuelto = resuelto;
        this.fechaResolucion = fechaResolucion;
    }

    public Reclamo() {}


}