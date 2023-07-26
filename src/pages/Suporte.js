import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import Sidebar from '../components/common/Sidebar/Sidebar';
import FireAnimation from '../components/common/Bobeiras/fogo';



const Suporte = () => {
  return (
    <div>
      <Navbar />      
      <div className='cardcenter p-4'>
        <h1>Estamos em greve!</h1><FireAnimation /> 
      </div>
      <Footer />
      <Sidebar />
      </div>
  );
}

export default Suporte;
