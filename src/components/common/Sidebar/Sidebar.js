import React, { useState, useEffect, useRef } from 'react';
import { Nav, Card } from 'react-bootstrap';
import './Sidebar.css'; // Importa o CSS do Sidebar
import { Link } from 'react-router-dom';
import FireAnimation from '../Bobeiras/fogo';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef();

    const toggleSidebar = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = event => {
            if ((sidebarRef.current && !sidebarRef.current.contains(event.target)) || event.target === document.querySelector('.sidebar-toggle')) {
                setIsOpen(false); // Fecha o Sidebar
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div onClick={toggleSidebar} className={`sidebar-toggle ${isOpen ? 'hidden' : ''}`}>
                    <Card.Body style={{ padding: 0, margin: 0 }}>
                        <FireAnimation style={{ width: '3vw' }} />
                    </Card.Body>
            </div>
            <Card ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
                <Card.Body>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Link className="nav-link my-2" to="/duedilligence">Due Dilligence</Link>
                        <Link className="nav-link my-2" to="/calcfp">Calculadora de Salário Funcionários Públicos</Link>
                        <Link className="nav-link my-2" to="/calculadora">Calculadora de Prazos</Link>
                        <Link className="nav-link my-2" to="/geradorproc">Gerador de Procuração</Link>
                        <Link className="nav-link my-2" to="/calcprescricao">Cálculo de Prescrição</Link>
                        <Link className="nav-link my-2" to="/atualizamon">Cálculo de Atualização Monetária</Link>
                    </Nav>
                </Card.Body>
            </Card>
        </>
    );
};

export default Sidebar;
