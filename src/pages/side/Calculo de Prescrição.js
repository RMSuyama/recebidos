import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import CheckDilligence from '../../components/views/duedilligence/checkdilligence';
import CalcPrescricao from '../../components/views/calculoprescpenal/calcPrescPenal';



const Calcprescri = () => {
  return (
    <div>
      <Navbar />  
      <CalcPrescricao />
      <CheckDilligence />
      <Footer />
      <Sidebar />
      
      </div>
  );
}

export default Calcprescri;
