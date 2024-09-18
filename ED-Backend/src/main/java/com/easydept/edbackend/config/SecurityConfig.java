package com.easydept.edbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
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
                                .anyRequest().authenticated()
                )
                .csrf(csrf -> csrf.disable()); // Deshabilitar CSRF si no es necesario para tu caso

        return http.build();
    }
}
