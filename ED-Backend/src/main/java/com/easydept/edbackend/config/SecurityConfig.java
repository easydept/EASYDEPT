package com.easydept.edbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/controllers/status").permitAll()
                                .requestMatchers("/edificios").permitAll() // Permitir acceso sin autenticación
                                .requestMatchers("/autenticacion").permitAll()
                                .requestMatchers("/departamentos").permitAll()
                                .requestMatchers("/permisos").permitAll()
                                .requestMatchers("/permisos/inquilinos").permitAll()
                                .requestMatchers("/roles").permitAll()
                                .requestMatchers("/roles/usuarios").permitAll()
                                .requestMatchers("/usuarios").permitAll()
                                .requestMatchers("/usuarios/**").permitAll()
                                .requestMatchers("/edificios/**").permitAll()
                                .requestMatchers("/departamentos/**").permitAll()

                                .anyRequest().authenticated()
                )
                .csrf(csrf -> csrf.disable()); // Deshabilitar CSRF si no es necesario para tu caso

        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
