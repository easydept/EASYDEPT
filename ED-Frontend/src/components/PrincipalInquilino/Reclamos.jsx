import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

const Reclamos = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí es donde agregas tus credenciales de EmailJS
        const serviceID = 'service_vm9pgk2';   // Reemplaza con tu SERVICE_ID
        const templateID = 'template_86uzg4q'; // Reemplaza con tu TEMPLATE_ID
        const userID = 'Qq6nKv0nrBN5eaER2';      // Reemplaza con tu Public Key (USER_ID)

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                alert('Correo enviado con éxito!');
            }, (error) => {
                alert('Error al enviar el correo: ' + JSON.stringify(error));
            });

        // Limpiar formulario
        setFormData({
            nombre: '',
            apellido: '',
            email: '',
            mensaje: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Nuevo Reclamo</h2>

            {/* Campo: nombre */}
            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            {/* Campo: apellido */}
            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="apellido">Apellido</label>
                <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            {/* Campo: email */}
            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            {/* Campo: mensaje */}
            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="mensaje">Reclamo</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded h-24"
                />
            </div>

            <button type="submit" className="bg-custom-green text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                Enviar Reclamo
            </button>
        </form>
    );
};

export default Reclamos;
