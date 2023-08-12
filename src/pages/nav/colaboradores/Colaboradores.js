import React from 'react';
import Navbar from '../../../components/common/Navbar/Navbar';
import Footer from '../../../components/common/Footer/Footer';
import HomeView from '../../../components/views/homepanel/homeview';
import FormColaborador from '../../../components/views/colaboradores/formColab';
import TableColaboradores from '../../../components/views/colaboradores/colabview';
import EditColaborador from '../../../components/views/colaboradores/editcolab';
import Tablepdf from '../../../components/views/colaboradores/generatepdf';
import Menubar from '../../../components/common/panel/MenuBar';
import PerformanceChart from '../../../components/views/carteiraview/PerformanceChart';



const Colaboradores = () => {
  return (
    <div>
      <Navbar />  
      <Menubar />    
      <HomeView />
      <PerformanceChart />
      <FormColaborador />
      <TableColaboradores />
      <EditColaborador />
      <Tablepdf />
      <Footer />
      </div>
  );
}

export default Colaboradores;
