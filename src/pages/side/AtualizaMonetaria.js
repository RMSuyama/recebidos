import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';

import CalcPrazo from '../../components/views/calculadoradeprazos/calculadora';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import MonetAtual from '../../components/views/atualizacaoMonetaria/atMonet';



const AtualizaMon = () => {
  return (
    <div>
      <Navbar /> 
    <MonetAtual />
      atualizacaoMonetaria
      <Footer />
      <Sidebar />      
      </div>
  );
}

export default AtualizaMon;
