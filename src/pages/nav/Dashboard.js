import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import HomeView from '../../components/views/homepanel/homeview';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import Chartgeral from '../../components/views/carteiraview/recebidos/recebidostable';



const Dashboard = () => {
  return (
    <div>
      <Navbar />    
      <HomeView />
      <Chartgeral />
      <Footer />
      <Sidebar />
      </div>
  );
}

export default Dashboard;
