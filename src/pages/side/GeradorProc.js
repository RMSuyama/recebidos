import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import HomeView from '../../components/views/homepanel/homeview';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import ProcuracaoForm from '../../components/views/procuracaogen/procuracaoForm';



const GeradorProc = () => {
  return (
    <div>
      <Navbar />  
      <HomeView />
      <ProcuracaoForm />
      <Footer />
      <Sidebar />
      
      </div>
  );
}

export default GeradorProc;
