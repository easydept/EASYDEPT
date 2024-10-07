import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Principal = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            <div className="w-20 bg-custom-green h-screen fixed left-0 top-0"></div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 transition-all duration-500 ${isSidebarOpen ? 'ml-64' : ''}`}>
                <Navbar toggleSidebar={toggleSidebar} />
            </div>
        </div>
    )
}

export default Principal;
