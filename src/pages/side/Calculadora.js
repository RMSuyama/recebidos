import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import CalcPrazo from '../../components/views/calculadoradeprazos/calculadora';
import Menubar from '../../components/common/panel/MenuBar';



const Calculadora = () => {
  return (
    <div>
      <Navbar /> 
      <Menubar />
      <CalcPrazo />
      <Footer />
      </div>
  );
}

export default Calculadora;
