import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';

import CalcPrazo from '../../components/views/calculadoradeprazos/calculadora';
import Sidebar from '../../components/common/Sidebar/Sidebar';



const Calculadora = () => {
  return (
    <div>
      <Navbar /> 

      <CalcPrazo />
      <Footer />
      <Sidebar />      
      </div>
  );
}

export default Calculadora;
