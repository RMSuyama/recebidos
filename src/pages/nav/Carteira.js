import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import HomeView from '../../components/views/homepanel/homeview';
import CPagarView from '../../components/views/carteiraview/saida/cpagarview';
import RecebidoViews from '../../components/views/carteiraview/recebidos/recebidoView';
import CalendarView from '../../components/views/homepanel/calendar';
import Menubar from '../../components/common/panel/MenuBar';



const Carteira = () => {
  return (
    <div>
      <Navbar /> 
      <Menubar />
      <HomeView />
      <CalendarView />
      <CPagarView />  
      <RecebidoViews />
      <Footer />
      </div>
  );
}

export default Carteira;
