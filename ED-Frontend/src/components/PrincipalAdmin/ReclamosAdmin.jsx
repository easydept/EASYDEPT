import React, { useState, useEffect } from 'react';
import { getReclamosPorEdificio, solucionarReclamo } from "../../services/reclamos.service.js";
import { useParams } from 'react-router-dom';

const ReclamosAdmin = () => {
    const { idEdificioSelec } = useParams()
    const idEdificio = idEdificioSelec.split(':')[1];
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        fecha: '',
        fechaResolucion: '',
        departamento: '',
        email: '',
        mensaje: '',
        respuesta: ''
    });

    const [selectedReclamo, setSelectedReclamo] = useState(null);
    const [reclamos, setReclamos] = useState([]);

    const fetchReclamos = async () => {
        const data = await getReclamosPorEdificio(idEdificio);
        setReclamos(data);
    };

    useEffect(() => {
        fetchReclamos();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(selectedReclamo);
        try {
            const data = await solucionarReclamo(selectedReclamo.idReclamo, formData.respuesta);
            console.log('Reclamo solucionado:', data);
    
            // Limpiar formulario
            setFormData({
                nombre: '',
                apellido: '',
                fecha: '',
                fechaResolucion: '',
                departamento: '',
                email: '',
                mensaje: '',
                respuesta: ''
            });
            setSelectedReclamo(null);
            fetchReclamos();

        } catch (error) {
            console.error('Error al solucionar el reclamo:', error);
        }
    };

    const handleReclamoClick = (reclamo) => {
        setSelectedReclamo(reclamo);

        const fechaEmision = reclamo.fechaEmision;
        const fechaSolo = fechaEmision.split("T")[0];

        let fechaSoloResol = null;
        if (reclamo.fechaResolucion != null) {
            const fechaResol = reclamo.fechaResolucion;
            fechaSoloResol = fechaResol.split("T")[0];
        }
        
        
        setFormData({
            nombre: reclamo.emisor.nombre,
            apellido: reclamo.emisor.apellido, // Suponiendo que el reclamo tiene el apellido
            fecha: fechaSolo,
            fechaResolucion: fechaSoloResol,
            departamento: `${reclamo.departamento.numeroPiso}${reclamo.departamento.unidad}`,
            email: reclamo.emisor.email, // Suponiendo que el reclamo tiene el email
            mensaje: reclamo.descripcion,
            respuesta: ''
        });
    };

    return (
        <div className="flex flex-col md:flex-row font-montserrat">
            {/* Columna de detalles del reclamo */}
            <div className="md:w-1/2 p-6">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold mb-4">
                        {selectedReclamo ? `Reclamo de ${formData.nombre} ${formData.apellido}` : 'Selecciona un reclamo'}
                    </h2>

                    {/* Campos del formulario */}
                    <div className="flex mb-4">
                        <div className="w-1/2 pr-2">
                            <label className="block text-gray-700 mb-1" htmlFor="fecha">Fecha de reclamo</label>
                            <input
                                type="date"
                                id="fecha"
                                name="fecha"
                                value={formData.fecha}
                                readOnly
                                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="block text-gray-700 mb-1" htmlFor="departamento">Departamento</label>
                            <input
                                type="text" // Cambié de "departamento" a "text"
                                id="departamento"
                                name="departamento"
                                value={formData.departamento}
                                readOnly
                                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1" htmlFor="mensaje">Reclamo</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded h-24 bg-gray-100"
                        />
                    </div>

                    {/* Condicional para mostrar los campos de respuesta o la resolución */}
                    {selectedReclamo ? (
                        selectedReclamo.resolucion === null ? (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1" htmlFor="respuesta">Respuesta</label>
                                <textarea
                                    id="respuesta"
                                    name="respuesta"
                                    value={formData.respuesta}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded h-24"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full inline-block pt-2 pr-5 pb-2 pl-5 text-center text-white bg-custom-green rounded-xl transition duration-200 hover:bg-custom-green-dark ease-in-out transform hover:scale-102"
                            >
                                Enviar respuesta
                            </button>
                        </>
                    ) : (
                        <>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor="fecha">Fecha de resolución</label>
                            <input
                                type="date"
                                id="fechaResolucion"
                                name="fechaResolucion"
                                value={formData.fechaResolucion}
                                readOnly
                                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Resolución</label>
                            <textarea
                                readOnly
                                value={selectedReclamo.resolucion}
                                className="w-full p-2 border border-gray-300 rounded h-24 bg-gray-100"
                            />
                        </div>
                        </>
                    )) : (
                        <p className="text-gray-500">Selecciona un reclamo para ver sus detalles</p>
                    )}
                </form>
            </div>

            {/* Columna de lista de reclamos */}
            <div className="md:w-1/2 p-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Reclamos</h2>
                    <ul className="space-y-2">
                        {reclamos.map(reclamo => (
                            <li key={reclamo.idReclamo}>
                                <button
                                    onClick={() => handleReclamoClick(reclamo)}
                                    className="border border-custom-green text-black px-4 py-2 rounded hover:bg-custom-green transition duration-200"
                                >
                                    {reclamo.departamento.numeroPiso}{reclamo.departamento.unidad} {reclamo.emisor.nombre} {reclamo.emisor.apellido} - Asunto: {reclamo.asunto}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReclamosAdmin;
