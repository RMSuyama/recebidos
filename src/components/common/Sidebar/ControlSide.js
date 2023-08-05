import React, { useState, useEffect, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; 
import { Link } from 'react-router-dom';

const ControlSide = () => {
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
                    <Link className="nav-link my-2" to="/riskManagement" title="Gerenciamento de Riscos">Gerenciamento de Riscos</Link>
                    <Link className="nav-link my-2" to="/complianceChecklist" title="Checklist de Conformidade">Checklist de Conformidade</Link>
                    <Link className="nav-link my-2" to="/internalProcedureGenerator" title="Gerador de Procedimentos Internos">Gerador de Procedimentos Internos</Link>
                    <Link className="nav-link my-2" to="/legalAudit" title="Auditoria Jurídica">Auditoria Jurídica</Link>
                </Nav>
            </div>
        </div>
    );
};

export default ControlSide;
