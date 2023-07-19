import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import HomeView from '../views/homepanel/homeview';
import CarteiraView from '../views/carteiraview/carteiraview';



const Carteira = () => {
  return (
    <div>
      <Navbar />      
      <HomeView />
      <CarteiraView />
      <Footer />
      
      </div>
  );
}

export default Carteira;
