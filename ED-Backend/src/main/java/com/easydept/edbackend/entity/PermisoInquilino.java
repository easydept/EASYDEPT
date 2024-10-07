package com.easydept.edbackend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "permiso_inquilino")
public class PermisoInquilino {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_permiso_inquilino")
    private Integer idPermisoInquilino;

    @ManyToOne
    @JoinColumn(name = "id_permiso", nullable = false)
    private Permiso permiso;

    @ManyToOne
    @JoinColumn(name = "id_inquilino", nullable = false)
    private Usuario inquilino;

    @ManyToOne
    @JoinColumn(name = "id_departamento", nullable = false)
    private Departamento departamento;


    // Constructor por defecto
    public PermisoInquilino() {
    }

    // Constructor completo
    public PermisoInquilino(Permiso permiso, Usuario inquilino, Departamento departamento) {
        this.permiso = permiso;
        this.inquilino = inquilino;
        this.departamento = departamento;
    }

    // Getters y setters
    public Integer getIdPermisoInquilino() {
        return idPermisoInquilino;
    }

    public void setIdPermisoInquilino(Integer idPermisoInquilino) {
        this.idPermisoInquilino = idPermisoInquilino;
    }

    public Permiso getPermiso() {
        return permiso;
    }

    public void setPermiso(Permiso permiso) {
        this.permiso = permiso;
    }

    public Usuario getInquilino() {
        return inquilino;
    }

    public void setInquilino(Usuario inquilino) {
        this.inquilino = inquilino;
    }

    public Departamento getDepartamento() {
        return departamento;
    }

    public void setDepartamento(Departamento departamento) {
        this.departamento = departamento;
    }
}
