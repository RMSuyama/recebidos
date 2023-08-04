import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import HomeView from '../../components/views/homepanel/homeview';
import Newsletter from '../../components/views/newsletter';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import CalendarView from '../../components/views/homepanel/calendar';



const Home = () => {
  return (
    <div>
      <Navbar />      
      <CalendarView />
      <Newsletter />
      <Footer />
      <Sidebar />
      
      </div>
  );
}

export default Home;
