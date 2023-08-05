import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import Newsletter from '../../components/views/newsletter';
import CalendarView from '../../components/views/homepanel/calendar';
import Menubar from '../../components/common/panel/MenuBar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Menubar />
      <CalendarView />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
