import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import HomeView from '../../components/views/homepanel/homeview';
import Recebido from '../../components/views/carteiraview/recebidos/recebido';
import SomaEntradas from '../../components/views/carteiraview/recebidos/totalentrada';
import Recebidostable from '../../components/views/carteiraview/recebidos/recebidostable';
import Sidebar from '../../components/common/Sidebar/Sidebar';



const Carteira = () => {
  return (
    <div>

      <Navbar />      
      <HomeView />
      <SomaEntradas />
      <Recebidostable />
      <Recebido />
      <Footer />
      <Sidebar />
      </div>
  );
}

export default Carteira;