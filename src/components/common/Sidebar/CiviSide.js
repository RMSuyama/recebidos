import React, { useState, useEffect, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; 
import { Link } from 'react-router-dom';

const CivilSide = () => {
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
                <Link className="nav-link my-2" to="/calculadora" title="Calculadora de Prazos">Calculadora de Prazos</Link>

                <Link className="nav-link my-2" to="/processGenerator" title="Gerador de Procuração">Gerador de Procuração</Link>
                <Link className="nav-link my-2" to="/contractGenerator" title="Gerador de Contratos">Gerador de Contratos</Link>
                <Link className="nav-link my-2" to="/debtCalculator" title="Calculadora de Dívidas">Calculadora de Dívidas</Link>
                <Link className="nav-link my-2" to="/deadlineCalculator" title="Calculadora de Prazos Processuais">Calculadora de Prazos Processuais</Link>
                <Link className="nav-link my-2" to="/damagesCalculator" title="Calculadora de Danos Morais">Calculadora de Danos Morais</Link>
                <Link className="nav-link my-2" to="/inheritanceSimulator" title="Simulador de Meação - Inventário">Simulador de Meação - Inventário</Link>

            </Nav> 

            </div>
        </div>
    );
};

export default CivilSide;
