package easydept.edbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
@Table(name = "tipo_gasto")
public class TipoGasto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tipo_gasto")
    private int idTipoGasto;

    @Setter
    @Column(name = "nombre", nullable = false)
    private String nombre;

    public TipoGasto(String nombre) {
        this.nombre = nombre;
    }

    public TipoGasto() {}

}
