import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import HomeView from '../views/homepanel/homeview';
import Chartgeral from '../views/homeChart/chartgeral';
import FormColaborador from '../views/colaboradores/formColab';
import TableColaboradores from '../views/colaboradores/colabview';
import EditColaborador from '../views/colaboradores/editcolab';



const Colaboradores = () => {
  return (
    <div>
      <Navbar />      
      <HomeView />
      <FormColaborador />
      <TableColaboradores />
      <EditColaborador />
      <Chartgeral />
      <Footer />
      
      </div>
  );
}

export default Colaboradores;
