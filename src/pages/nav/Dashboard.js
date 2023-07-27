import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import HomeView from '../../components/views/homepanel/homeview';
import Chartgeral from '../../components/views/homeChart/chartgeral';
import Sidebar from '../../components/common/Sidebar/Sidebar';



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
