package easydept.edbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
@Table(name = "liquidacion_expensas")
public class LiquidacionExpensas {
    // Getters y setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_liquidacion_expensas")
    private Integer idLiquidacionExpensas;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_expensas", nullable = false)
    private Expensas expensas;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_departamento", nullable = false)
    private Departamento departamento;

    @Setter
    @Column(name = "monto_correspondiente", nullable = false)
    private float montoCorrespondiente;

    public LiquidacionExpensas(Expensas expensas, Departamento departamento, float montoCorrespondiente) {
        this.expensas = expensas;
        this.departamento = departamento;
        this.montoCorrespondiente = montoCorrespondiente;
    }

    public LiquidacionExpensas() {}
}
