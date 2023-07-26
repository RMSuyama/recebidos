import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';

import CalcularBeneficios from '../components/views/funcionarioPublico/calculadora';
import Sidebar from '../components/common/Sidebar/Sidebar';



const CalcFP = () => {
  return (
    <div>

      <Navbar />      
        <CalcularBeneficios />

      <Footer />
      <Sidebar />
      </div>
  );
}

export default CalcFP;
