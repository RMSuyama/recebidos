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
                    <Link className="nav-link my-2" to="/duedilligence" title="Due Dilligence">Due Dilligence</Link>
                    <Link className="nav-link my-2" to="/calcfp" title="Calculadora de Salário Funcionários Públicos">Calculadora de Salário Funcionários Públicos</Link>
                    <Link className="nav-link my-2" to="/calculadora" title="Calculadora de Prazos">Calculadora de Prazos</Link>
                    <Link className="nav-link my-2" to="/atualizamon" title="Cálculo de Atualização Monetária">Cálculo de Atualização Monetária</Link>
                </Nav>
            </div>
        </div>
    );
};

export default LaborSide;
