import React from 'react';

const Building = ({ numDepartments = 16 }) => {
  const departments = Array.from({ length: numDepartments }, (_, i) => i + 1); // Creamos un array para los departamentos

  return (
    <div className="grid grid-cols-4 gap-3 p-7 bg-gray-200 rounded-lg">
      {departments.map((dept) => (
        <div
          key={dept}
          className="flex items-center bg-custom-green justify-center bg-blue-500 text-white font-bold w-16 h-16 rounded-lg"
        >
          {dept}
        </div>
      ))}
    </div>
  );
};

export default Building;
