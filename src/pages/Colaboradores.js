import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import HomeView from '../components/views/homepanel/homeview';
import Chartgeral from '../components/views/homeChart/chartgeral';
import FormColaborador from '../components/views/colaboradores/formColab';
import TableColaboradores from '../components/views/colaboradores/colabview';
import EditColaborador from '../components/views/colaboradores/editcolab';
import Tablepdf from '../components/views/colaboradores/generatepdf';
import Sidebar from '../components/common/Sidebar/Sidebar';



const Colaboradores = () => {
  return (
    <div>
      <Navbar />      
      <HomeView />
      <FormColaborador />
      <TableColaboradores />
      <EditColaborador />
      <Tablepdf />
      <Footer />
      <Sidebar />
      </div>
  );
}

export default Colaboradores;
