import React from 'react';

import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import HomeView from '../../components/views/homepanel/homeview';
import CPagarView from '../../components/views/carteiraview/saida/cpagarview';
import RecebidoViews from '../../components/views/carteiraview/recebidos/recebidoView';
import CalendarView from '../../components/views/homepanel/calendar';
import Menubar from '../../components/common/panel/MenuBar';
import EntradaPdf from '../../components/views/carteiraview/recebidos/entradaPdf';
import SaidaPdf from '../../components/views/carteiraview/saida/saidapdf';

const Carteira = () => {

  return (
    <div>
      <Navbar /> 
      <Menubar />
      <HomeView />    
      <CalendarView />
      <div className='row p-5'>
        <div className="col-md-6">
          <CPagarView />
        </div>
        <div className="col-md-6">
          <RecebidoViews />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Carteira;
