import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; 
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className={` ${isOpen ? 'open' : ''}`}>
            <div className="card-group">
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

export default Sidebar;
