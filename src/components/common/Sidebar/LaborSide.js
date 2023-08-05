import React, { useState, useEffect, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; 
import { Link } from 'react-router-dom';

const LaborSide = () => {
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
                <Link className="nav-link my-2" to="/laborCalculator" title="Calculadora de Direitos Trabalhistas">Calculadora de Direitos Trabalhistas</Link>
                <Link className="nav-link my-2" to="/contractGenerator" title="Gerador de Contratos de Trabalho">Gerador de Contratos de Trabalho</Link>
                <Link className="nav-link my-2" to="/laborLawReference" title="Referência de Lei Trabalhista">Referência de Lei Trabalhista</Link>
            </Nav>
            </div>
        </div>
    );
};

export default LaborSide;
