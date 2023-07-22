import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';

import CalcPrazo from '../components/views/calculadoradeprazos/calculadora';



const Calculadora = () => {
  return (
    <div>
      <Navbar />      
      <CalcPrazo />
      <Footer />
      
      </div>
  );
}

export default Calculadora;
