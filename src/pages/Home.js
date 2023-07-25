import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import HomeView from '../components/views/homepanel/homeview';
import Newsletter from '../components/views/newsletter';
import ProcuracaoView from '../components/views/procuracaogen/proc';
import MyComponent from '../components/views/procuracaogen/procgen';



const Home = () => {
  return (
    <div>
      <Navbar />      
      <HomeView />
      <MyComponent />
      <Newsletter />
      <Footer />
      
      </div>
  );
}

export default Home;
