import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import HomeView from '../views/homepanel/homeview';
import CarteiraView from '../views/carteiraview/carteiraview';
import Recebido from '../views/carteiraview/recebido';
import SomaEntradas from '../views/carteiraview/totalentrada';
import Recebidostable from '../views/carteiraview/recebidostable';



const Carteira = () => {
  return (
    <div>

      <Navbar />      
      <HomeView />
      <SomaEntradas />
      <Recebidostable />
      <Recebido />
      <CarteiraView />
      <Footer />
      
      </div>
  );
}

export default Carteira;
