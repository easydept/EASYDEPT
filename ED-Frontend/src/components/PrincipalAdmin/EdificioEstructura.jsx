import React from "react";

const EdificioEstructura = ({ departamentos, edificio }) => {
  // Crear una matriz basada en el número de pisos y las unidades por piso
  console.log(departamentos);
  const estructuraEdificio = () => {
    const matriz = Array.from({ length: edificio.cantidadPisos }, () => []);

    departamentos.forEach((dept) => {
      const piso = dept.numeroPiso - 1; // Ajusta el índice del piso (0-based index)
      const unidad = dept.unidad.charCodeAt(0) - 65; // Convierte 'A', 'B', 'C' a índices (0, 1, 2...)

      if (!matriz[piso]) matriz[piso] = [];
      matriz[piso][unidad] = dept;
    });

    return matriz;
  };

  const matrix = estructuraEdificio();

  return (
    <div className="font-montserrat p-6">
      {matrix.map((fila, pisoIndex) => (
        <div key={pisoIndex} className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Piso {pisoIndex + 1}</h3>
          <div className="flex gap-6 flex-wrap">
            {fila.map((dept, unidadIndex) => (
              <div
                key={unidadIndex}
                className="bg-custom-green text-white p-6 rounded-lg w-40 h-auto flex flex-col items-center justify-center shadow-lg border-2 border-gray-300"
              >
                {dept ? (
                  <>
                    <div className="text-lg text-center">
                      Propietario:{" "}
                      {dept.propietario
                        ? `${dept.propietario.nombre} ${dept.propietario.apellido}`
                        : "Sin propietario"}
                    </div>
                    <div className="text-lg mt-2 text-center">
                      Inquilino:{" "}
                      {dept.inquilino
                        ? `${dept.inquilino.nombre} ${dept.inquilino.apellido}`
                        : "Sin inquilino"}
                    </div>
                    <div className="text-lg font-bold mt-2">
                      {dept.numeroPiso}-{dept.unidad}
                    </div>
                  </>
                ) : (
                  <span className="text-lg font-light">Vacío</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EdificioEstructura;





