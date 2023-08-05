import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import MecaAnimation from '../../components/common/Bobeiras/meca';
import Menubar from '../../components/common/panel/MenuBar';



const Suporte = () => {
  return (
    <div>
      <Navbar />   
      <Menubar />   
      <div className='cardcenter p-5 text-center'>
        <h1>Estamos trabalhando nessa seção ainda!</h1>
        <MecaAnimation /> </div>
      <Footer />
      </div>
  );
}

export default Suporte;
