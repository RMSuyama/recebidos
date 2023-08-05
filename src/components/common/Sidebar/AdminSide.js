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
                    <Link className="nav-link my-2" to="/duedilligence" title="Due Dilligence">DD</Link>
                    <Link className="nav-link my-2" to="/calcfp" title="Calculadora de Salário Funcionários Públicos">CSFP</Link>
                    <Link className="nav-link my-2" to="/calculadora" title="Calculadora de Prazos">CP</Link>
                    <Link className="nav-link my-2" to="/geradorproc" title="Gerador de Procuração">GP</Link>
                    <Link className="nav-link my-2" to="/calcprescricao" title="Cálculo de Prescrição">CP</Link>
                    <Link className="nav-link my-2" to="/atualizamon" title="Cálculo de Atualização Monetária">CAM</Link>
                </Nav>
            </div>
        </div>
    );
};

export default AdminSide;
