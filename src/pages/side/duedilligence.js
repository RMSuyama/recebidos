import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import CheckDilligence from '../../components/views/duedilligence/checkdilligence';
import Menubar from '../../components/common/panel/MenuBar';



const DueDilligence = () => {
  return (
    <div>
      <Navbar />  
      <Menubar />
      <CheckDilligence />
      <Footer />
      
      </div>
  );
}

export default DueDilligence;
