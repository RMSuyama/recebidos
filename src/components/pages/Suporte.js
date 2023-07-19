import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import HomeView from '../views/homepanel/homeview';
import Chartgeral from '../views/homeChart/chartgeral';



const Suporte = () => {
  return (
    <div>
      <Navbar />      
      <HomeView />
      <Chartgeral />
      <Footer />
      
      </div>
  );
}

export default Suporte;
