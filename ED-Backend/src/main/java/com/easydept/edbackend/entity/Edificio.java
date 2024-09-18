package com.easydept.edbackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Edificio {
    @Id
    private int id;
    private String nombre;

    // Getters y Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

