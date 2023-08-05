import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import MonetAtual from '../../components/views/atualizacaoMonetaria/atMonet';
import Menubar from '../../components/common/panel/MenuBar';



const AtualizaMon = () => {
  return (
    <div>
      <Navbar /> 
      <Menubar />
    <MonetAtual />
      atualizacaoMonetaria
      <Footer />
      </div>
  );
}

export default AtualizaMon;
