import React, { useState, useEffect, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; 
import { Link } from 'react-router-dom';

const AdminSide = () => {
    const [isOpen, setIsOpen] = useState(true); // Define o estado inicial como aberto
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false); // Fecha o sidebar se clicado fora
        }
    };

    useEffect(() => {
        // Quando o componente é montado, adiciona o event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Quando o componente é desmontado, remove o event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={ref}>
            <div className="card-groups">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Link className="nav-link my-2" to="/publicTenderSimulator" title="Simulador de Licitação">Fluxograma de Licitações</Link>
                <Link className="nav-link my-2" to="/administrativeAppealGenerator" title="Gerador de Recurso Administrativo">Gerador de Recurso Administrativo</Link>
                <Link className="nav-link my-2" to="/administrativeLawReference" title="Referência de Lei Administrativa">Referência de Lei Administrativa</Link>
            </Nav>
            </div>
        </div>
    );
};

export default AdminSide;
