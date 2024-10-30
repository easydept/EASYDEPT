import React, { useState } from 'react';
import Chat from './Chat';
import SidebarChats from './SidebarChats';

const ResumenChat = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow flex overflow-hidden mt-16">
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