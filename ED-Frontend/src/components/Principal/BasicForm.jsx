import React from 'react';
import Slider from 'react-slick';

const buildingsData = [
    {
        id: 1,
        name: 'Edificio 1',
        address: 'Calle Falsa 123',
        image: 'ed1.jpg', 
    },
    {
        id: 2,
        name: 'Edificio 2',
        address: 'Avenida Siempre Viva 742',
        image: 'ed2.jpg', 
    },
    {
        id: 3,
        name: 'Edificio 3',
        address: 'Boulevard de los Sueños Rotos 456',
        image: 'ed3.jpg', 
    },
    // Agrega más edificios según sea necesario
];

const BasicForm = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto p-5">
            <h2 className="text-2xl font-bold text-center mb-5">Edificios administrados por "usr"</h2>
            <Slider {...settings}>
                {buildingsData.map(building => (
                    <div key={building.id} className="p-4">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={building.image} alt={building.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{building.name}</h3>
                                <p className="text-gray-600">{building.address}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="flex justify-end mt-10"> {/* Alineación del botón a la derecha y margen superior */}
                <button type="submit" className="bg-custom-green text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                    Agregar nuevo edificio a administrar
                </button>
            </div>
        </div>
    );
};

export default BasicForm;
