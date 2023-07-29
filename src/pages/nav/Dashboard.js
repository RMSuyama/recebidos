import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import HomeView from '../../components/views/homepanel/homeview';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import CartChart from '../../components/views/carteiraview/CartChart';
import TotalChart from '../../components/views/carteiraview/CartChart';
import EvoluctionChart from '../../components/views/carteiraview/TotalChart';



const Dashboard = () => {
  return (
    <div>
      <Navbar />  
      <HomeView />  
      <EvoluctionChart />
      <CartChart />
      <Footer />
      <Sidebar />
      </div>
  );
}

export default Dashboard;
