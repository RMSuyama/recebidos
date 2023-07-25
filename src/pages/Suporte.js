import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import HomeView from '../components/views/homepanel/homeview';
import Chartgeral from '../components/views/homeChart/chartgeral';



const Suporte = () => {
  return (
    <div>
      <Navbar />      
      <div className='card'>
        <h1>Estamos em greve!</h1>
      </div>
      <Footer />
      
      </div>
  );
}

export default Suporte;
