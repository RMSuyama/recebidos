import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import HomeView from '../../components/views/homepanel/homeview';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import CPagarView from '../../components/views/carteiraview/saida/cpagarview';

import RecebidoViews from '../../components/views/carteiraview/recebidos/recebidoView';



const Carteira = () => {
  return (
    <div>

      <Navbar /> 
      <HomeView />
      <CPagarView />  
      <RecebidoViews />
      <Footer />
      <Sidebar />
      </div>
  );
}

export default Carteira;
