import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import HomeView from '../components/views/homepanel/homeview';
import Recebido from '../components/views/carteiraview/recebido';
import SomaEntradas from '../components/views/carteiraview/totalentrada';
import Recebidostable from '../components/views/carteiraview/recebidostable';



const Carteira = () => {
  return (
    <div>

      <Navbar />      
      <HomeView />
      <SomaEntradas />
      <Recebidostable />
      <Recebido />
      <Footer />
      
      </div>
  );
}

export default Carteira;
