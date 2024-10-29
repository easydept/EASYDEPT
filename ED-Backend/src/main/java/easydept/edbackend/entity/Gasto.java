package easydept.edbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
@Table(name = "gasto")
public class Gasto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_gasto")
    private int idGasto;

    @Setter
    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Setter
    @Column(name = "monto", nullable = false)
    private float monto;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_tipo_gasto", nullable = false)
    private TipoGasto idTipoGasto;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_expensas", nullable = false)
    private Expensas idExpensas;

    @Setter
    @Column(name = "url_documento")
    private String urlDocumento;

    public Gasto(String nombre, float monto, TipoGasto idTipoGasto, Expensas idExpensas, String urlDocumento) {
        this.nombre = nombre;
        this.monto = monto;
        this.idTipoGasto = idTipoGasto;
        this.idExpensas = idExpensas;
        this.urlDocumento = urlDocumento;
    }
    public Gasto() {}
}
