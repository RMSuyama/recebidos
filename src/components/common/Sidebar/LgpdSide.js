import React, { useState, useEffect, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; 
import { Link } from 'react-router-dom';

const LgpdSide = () => {
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
                    <Link className="nav-link my-2" to="/mapeamentoDados" title="Mapeamento de Dados">Mapeamento de Dados</Link>
                    <Link className="nav-link my-2" to="/politicaPrivacidade" title="Política de Privacidade">Política de Privacidade</Link>
                    <Link className="nav-link my-2" to="/consentimentos" title="Gestão de Consentimentos">Gestão de Consentimentos</Link>
                    <Link className="nav-link my-2" to="/avaliacaoImpacto" title="Avaliação de Impacto à Proteção de Dados">Avaliação de Impacto</Link>
                    <Link className="nav-link my-2" to="/respostaIncidentes" title="Política de Resposta a Incidentes">Resposta a Incidentes</Link>
                    <Link className="nav-link my-2" to="/treinamentosLgpd" title="Programa de Treinamento">Programa de Treinamento</Link>
                    <Link className="nav-link my-2" to="/referenciaLgpd" title="Programa de Treinamento">Referências LinkTree</Link>

                </Nav>
            </div>
        </div>
    );
};

export default LgpdSide;
