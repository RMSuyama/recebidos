import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import CheckDilligence from '../../components/views/duedilligence/checkdilligence';
import CalcPrescricao from '../../components/views/calculoprescpenal/calcPrescPenal';
import Menubar from '../../components/common/panel/MenuBar';



const Calcprescri = () => {
  return (
    <div>
      <Navbar />  
      <Menubar />
      <CalcPrescricao />
      <CheckDilligence />
      <Footer />
      
      </div>
  );
}

export default Calcprescri;
