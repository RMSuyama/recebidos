import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import HomeView from '../../components/views/homepanel/homeview';
import CartChart from '../../components/views/carteiraview/CartChart';
import EvoluctionChart from '../../components/views/carteiraview/TotalChart';
import Menubar from '../../components/common/panel/MenuBar';



const Dashboard = () => {
  return (
    <div>
      <Navbar />  
      <Menubar />
      <HomeView />  
      <EvoluctionChart /> 
      <CartChart />
      <Footer />
      </div>
  );
}

export default Dashboard;
