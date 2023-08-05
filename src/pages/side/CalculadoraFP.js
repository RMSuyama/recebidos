import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import CalcularBeneficios from '../../components/views/funcionarioPublico/calculadora';
import Menubar from '../../components/common/panel/MenuBar';



const CalcFP = () => {
  return (
    <div>

      <Navbar />      
      <Menubar />
          <CalcularBeneficios />

      <Footer />
      </div>
  );
}

export default CalcFP;
