import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import HomeView from '../views/homepanel/homeview';
import Chartgeral from '../views/homeChart/chartgeral';
import Newsletter from '../views/newsletter';
import Recebido from '../views/carteiraview/recebido';
import FormColaborador from '../views/colaboradores/formColab';
import TableColaboradores from '../views/colaboradores/colabview';



const Home = () => {
  return (
    <div>
      <Navbar />      
      <HomeView />
      <TableColaboradores />
      <FormColaborador />
      <Recebido />
      <Chartgeral />
      <Newsletter />
      <Footer />
      
      </div>
  );
}

export default Home;
