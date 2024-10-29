import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SidebarEdificio from '../PrincipalAdmin/SidebarEdificio';
import Navbar from '../Inicio/Navbar';
import Reclamo from './Reclamo';
import SidebarReclamos from './SidebarReclamos';

const ResumenReclamos = () => {
  const { idEdificio } = useParams();
  const [isOpen, setIsOpen] = useState(true);
  const [selectedReclamo, setSelectedReclamo] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} isLoggedIn={true} />
      <div className="flex-grow flex overflow-hidden mt-16">
        <div className={`transition-transform duration-300 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
          <SidebarEdificio isOpen={isOpen} toggleSidebar={toggleSidebar} idEdificio={idEdificio} />
        </div>
        <div className="flex-grow flex flex-col mx-4 md:mx-8">
          <Reclamo selectedReclamo={selectedReclamo} />
        </div>
        <div className="w-64 sm:w-72 md:w-80 lg:w-96">
          <SidebarReclamos isOpen={isOpen} toggleSidebar={toggleSidebar} setSelectedReclamo={setSelectedReclamo} />
        </div>
      </div>
    </div>
  );
};

export default ResumenReclamos;
