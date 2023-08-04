import React, { useState, useEffect, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; // Importa o CSS do Sidebar
import { Link } from 'react-router-dom';
import FireAnimation from '../Bobeiras/fogo';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(); // Cria uma ref

    const toggleSidebar = () => setIsOpen(!isOpen);

    // Quando o componente é montado e desmontado
    useEffect(() => {
        const handleClickOutside = event => {
            // Verifica se o click ocorreu fora do Sidebar ou no botão
            if ((sidebarRef.current && !sidebarRef.current.contains(event.target)) || event.target === document.querySelector('.sidebar-toggle')) {
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
            <div onClick={toggleSidebar} className={`sidebar-toggle ${isOpen ? 'hidden' : ''}`}>
                <FireAnimation />
            </div>
            <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Link className="nav-link" to="/duedilligence">Due Dilligence</Link>
                    <Link className="nav-link" to="/calcfp">Calculadora de Salário Funcionários Públicos</Link>
                    <Link className="nav-link" to="/calculadora">Calculadora de Prazos</Link>
                    <Link className="nav-link" to="/geradorproc">Gerador de Procuração</Link>
                    <Link className="nav-link" to="/calcprescricao">Cálculo de Prescrição</Link>
                    <Link className="nav-link" to="/atualizamon">Cálculo de Atualização Monetária</Link>
                </Nav>
            </div>
        </>
    );
};

export default Sidebar;
