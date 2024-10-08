package com.easydept.edbackend.repositories;

import com.easydept.edbackend.entity.Edificio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EdificiosRepository extends JpaRepository<Edificio, Integer> {
}
