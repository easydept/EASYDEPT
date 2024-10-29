package easydept.edbackend.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "expensas")
public class Expensas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_expensas")
    private Integer idExpensas;

    @ManyToOne
    @JoinColumn(name = "id_edificio", nullable = false)
    private Edificio edificio;

    @Column(name = "mes_emision", nullable = false)
    private Integer mesEmision;

    @Column(name = "año_emision", nullable = false)
    private Integer añoEmision;

    @Column(name = "fecha_vencimiento1")
    private Date fechaVencimiento1;

    @Column(name = "fecha_vencimiento2")
    private Date fechaVencimiento2;

    @Column(name = "porcentaje_vencimiento1")
    private float porcentajeVencimiento1;

    @Column(name = "porcentaje_vencimiento2")
    private float porcentajeVencimiento2;

    @Column(name = "total", nullable = false)
    private float total;

    public Expensas(Edificio edificio, Integer mesEmision, Integer añoEmision, Date fechaVencimiento1, Date fechaVencimiento2, float porcentajeVencimiento1, float porcentajeVencimiento2, float total) {
        this.edificio = edificio;
        this.mesEmision = mesEmision;
        this.añoEmision = añoEmision;
        this.fechaVencimiento1 = fechaVencimiento1;
        this.fechaVencimiento2 = fechaVencimiento2;
        this.porcentajeVencimiento1 = porcentajeVencimiento1;
        this.porcentajeVencimiento2 = porcentajeVencimiento2;
        this.total = total;
    }

    public Expensas() {}

    public Integer getIdExpensas() {
        return idExpensas;
    }

    public Edificio getEdificio() {
        return edificio;
    }

    public void setEdificio(Edificio edificio) {
        this.edificio = edificio;
    }

    public Integer getMesEmision() {
        return mesEmision;
    }

    public void setMesEmision(Integer mesEmision) {
        this.mesEmision = mesEmision;
    }

    public Integer getAñoEmision() {
        return añoEmision;
    }

    public void setAñoEmision(Integer añoEmision) {
        this.añoEmision = añoEmision;
    }

    public Date getFechaVencimiento1() {
        return fechaVencimiento1;
    }

    public void setFechaVencimiento1(Date fechaVencimiento1) {
        this.fechaVencimiento1 = fechaVencimiento1;
    }

    public Date getFechaVencimiento2() {
        return fechaVencimiento2;
    }

    public void setFechaVencimiento2(Date fechaVencimiento2) {
        this.fechaVencimiento2 = fechaVencimiento2;
    }

    public float getPorcentajeVencimiento1() {
        return porcentajeVencimiento1;
    }

    public void setPorcentajeVencimiento1(float porcentajeVencimiento1) {
        this.porcentajeVencimiento1 = porcentajeVencimiento1;
    }

    public float getPorcentajeVencimiento2() {
        return porcentajeVencimiento2;
    }

    public void setPorcentajeVencimiento2(float porcentajeVencimiento2) {
        this.porcentajeVencimiento2 = porcentajeVencimiento2;
    }

    public float getTotal() {
        return total;
    }

    public void setTotal(float total) {
        this.total = total;
    }
}
