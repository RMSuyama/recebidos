import React, { useState, useEffect, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../panel/menubar.css';
import AdminSide from '../Sidebar/AdminSide';
import DueSide from '../Sidebar/DueSide';
import ControlSide from '../Sidebar/ControlSide';
import ElectorSide from '../Sidebar/ElectorSide';
import CivilSide from '../Sidebar/CiviSide';
import PenalSide from '../Sidebar/PenalSide';
import LaborSide from '../Sidebar/LaborSide';

const Menubar = () => {
    const [activeItem, setActiveItem] = useState(null);  // Inicia com null
    const sidebarRef = useRef();  // Cria uma referência para o sidebar

    const menuItems = [
        { name: "Administrativo", sidebar: "AdminSide" },
        { name: "Controladoria", sidebar: "ControlSide" },
        { name: "Due Dilligence", sidebar: "DueSide" },
        { name: "Eleitoral", sidebar: "ElectorSide" },
        { name: "Processo Civil", sidebar: "CivilSide" },
        { name: "Processo Penal", sidebar: "PenalSide" },
        { name: "Trabalhista", sidebar: "LaborSide" },
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
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menubar" aria-controls="menubar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menubar">
                    <Nav className="navbar-nav">
                        {menuItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <Link 
                                    className={`nav-link ${activeItem === item.sidebar ? 'active' : ''}`} 
                                    onClick={() => handleClick(item.sidebar)}
                                    style={{ color: 'black', textDecoration: 'none' }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </Nav>
                </div>
                <div ref={sidebarRef}>
                        {activeItem === 'AdminSide' && <AdminSide />}
                        {activeItem === 'ControlSide' && <ControlSide />} 
                        {activeItem === 'DueSide' && <DueSide />}
                        {activeItem === 'ElectorSide' && <ElectorSide />}
                        {activeItem === 'CivilSide' && <CivilSide />}
                        {activeItem === 'PenalSide' && <PenalSide />}
                        {activeItem === 'LaborSide' && <LaborSide />}
                    </div>

            </div>
        </nav>
    );
};

export default Menubar;
