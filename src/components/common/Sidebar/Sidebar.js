import React, { useState, useEffect, useRef } from 'react';
import { Nav, Button } from 'react-bootstrap';
import './Sidebar.css'; // Importa o CSS do Sidebar
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(); // Cria uma ref

    const toggleSidebar = () => setIsOpen(!isOpen);

    // Quando o componente é montado e desmontado
    useEffect(() => {
        const handleClickOutside = event => {
            // Verifica se o click ocorreu fora do Sidebar
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false); // Fecha o Sidebar
            }
        };

        // Adiciona o listener para o evento click
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Limpa o listener quando o componente é desmontado
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <Button onClick={toggleSidebar} className="sidebar-toggle btn-danger">
                {isOpen ? '' : ''}
            </Button>

            <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Link className="nav-link"  to="/duedilligence">Due Dilligence</Link>
                    <Link className="nav-link"  to="/calcfp">Calculadora de Salário Funcionários Públicos</Link>
                    <Link className="nav-link" to="/calculadora">Calculadora de Prazos</Link>
                    <Link className="nav-link" to="/geradorproc">Gerador de Procuração</Link>
                    <Link className="nav-link" to="link-4">Cálculo de Progressão de Pena</Link>
                </Nav>
            </div>
        </>
    );
};

export default Sidebar;
