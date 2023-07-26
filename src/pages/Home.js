import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import HomeView from '../components/views/homepanel/homeview';
import Newsletter from '../components/views/newsletter';
import MyComponent from '../components/views/procuracaogen/procgen';
import Sidebar from '../components/common/Sidebar/Sidebar';



const Home = () => {
  return (
    <div>
      <Navbar />      
      <HomeView />
      <MyComponent />
      <Newsletter />
      <Footer />
      <Sidebar />
      
      </div>
  );
}

export default Home;
