import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../panel/menubar.css';
import AdminSide from '../Sidebar/AdminSide';
import DueSide from '../Sidebar/DueSide';
import ControSide from '../Sidebar/ControSide';

const Menubar = () => {
    const [activeItem, setActiveItem] = useState(null);  // Inicia com null
    const sidebarRef = useRef();  // Cria uma referência para o sidebar

    const menuItems = [
        { name: "Controladoria", sidebar: "ControSide" },
        { name: "Due Dilligence", sidebar: "DueSide" },
        { name: "Administrativo", sidebar: "AdminSide" },
    ];

    const handleClick = (sidebarName) => {
        setActiveItem(sidebarName);
    }

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setActiveItem(null);  // Fecha o sidebar se clicado fora
        }
    }

    useEffect(() => {
        // Adiciona o event listener quando o componente monta
        document.addEventListener("mousedown", handleClickOutside);

        // Limpa o event listener quando o componente desmonta
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav expand="lg" bg="light" className="navbar navbar-expand-lg bg-body-tertiary">
            <Nav className=" ">
                {menuItems.map((item, index) => (
                    <Nav.Item 
                        key={index} 
                        className={`my-2 ${activeItem === item.sidebar ? 'active' : ''}`} 
                        onClick={() => handleClick(item.sidebar)}
                    >
                        {item.name}
                    </Nav.Item>
                ))}
            </Nav>
            <div ref={sidebarRef}>
                {activeItem === 'ControSide' && <ControSide />} 
                {activeItem === 'DueSide' && <DueSide />}
                {activeItem === 'AdminSide' && <AdminSide />}
            </div>
        </nav>
    );
};

export default Menubar;
