import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import HomeView from '../../components/views/homepanel/homeview';
import ProcuracaoForm from '../../components/views/procuracaogen/procuracaoForm';
import Menubar from '../../components/common/panel/MenuBar';



const GeradorProc = () => {
  return (
    <div>
      <Navbar />  
      <Menubar />
      <HomeView />
      <ProcuracaoForm />
      <Footer />
      
      </div>
  );
}

export default GeradorProc;
