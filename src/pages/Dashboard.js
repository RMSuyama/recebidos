import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import HomeView from '../components/views/homepanel/homeview';
import Chartgeral from '../components/views/homeChart/chartgeral';



const Dashboard = () => {
  return (
    <div>
      <Navbar />    

      <HomeView />
      <Chartgeral />
      <Footer />
      
      </div>
  );
}

export default Dashboard;
