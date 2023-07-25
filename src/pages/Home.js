import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import HomeView from '../components/views/homepanel/homeview';
import Chartgeral from '../components/views/homeChart/chartgeral';
import Newsletter from '../components/views/newsletter';
import Recebido from '../components/views/carteiraview/recebido';
import FormColaborador from '../components/views/colaboradores/formColab';
import TableColaboradores from '../components/views/colaboradores/colabview';



const Home = () => {
  return (
    <div>
      <Navbar />      
      <HomeView />
      <Newsletter />
      <Footer />
      
      </div>
  );
}

export default Home;
