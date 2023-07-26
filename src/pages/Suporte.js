import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import HomeView from '../components/views/homepanel/homeview';
import Chartgeral from '../components/views/homeChart/chartgeral';
import Sidebar from '../components/common/Sidebar/Sidebar';



const Suporte = () => {
  return (
    <div>
      <Navbar />      
      <div className='cardcenter p-4'>
        <h1>Estamos em greve!</h1>
      </div>
      <Footer />
      <Sidebar />
      </div>
  );
}

export default Suporte;
