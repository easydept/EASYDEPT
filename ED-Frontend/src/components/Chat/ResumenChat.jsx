import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SidebarEdificio from '../PrincipalAdmin/SidebarEdificio';
import Navbar from '../Inicio/Navbar';
import Chat from './Chat';
import SidebarChats from './SidebarChat';

const ResumenChat = () => {
  const { idEdificio } = useParams(); // Extrae idEdificio de los parámetros de la URL
  const [isOpen, setIsOpen] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} isLoggedIn={true} />
      <div className="flex-grow flex overflow-hidden mt-16">
        <div className={`transition-transform duration-300 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
          <SidebarEdificio isOpen={isOpen} toggleSidebar={toggleSidebar} setSelectedComponent={setSelectedComponent} idEdificio={idEdificio} />
        </div>
        <div className="flex-grow flex flex-col mx-4 md:mx-8">
          <Chat selectedComponent={selectedComponent} />
        </div>
        <div className="w-64 sm:w-72 md:w-80 lg:w-96">
          <SidebarChats />
        </div>
      </div>
    </div>
  );
};

export default ResumenChat;
