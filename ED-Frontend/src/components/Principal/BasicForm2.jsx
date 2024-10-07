import React, { useState } from 'react';

const BasicForm2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
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
        // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a una API
        console.log('Form submitted:', formData);
        // Resetear el formulario después de enviar
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">OPCION 2</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="email">Correo Electrónico</label>
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

            
            
            <button type="submit" className="bg-custom-green text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                Enviar
            </button>
            
        </form>
        
        
    );
};

export default BasicForm2;
