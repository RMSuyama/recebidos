import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import Sidebar from '../components/common/Sidebar/Sidebar';
import FireAnimation from '../components/common/Bobeiras/fogo';
import MecaAnimation from '../components/common/Bobeiras/meca';



const Suporte = () => {
  return (
    <div>
      <Navbar />      
      <div className='cardcenter p-4 text-center'>
        <h1>Estamos trabalhando nessa seção ainda!</h1>
        <MecaAnimation /> </div>
      <Footer />
      <Sidebar />
      </div>
  );
}

export default Suporte;
