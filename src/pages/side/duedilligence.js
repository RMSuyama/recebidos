import React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer/Footer';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import CheckDilligence from '../../components/views/duedilligence/checkdilligence';



const DueDilligence = () => {
  return (
    <div>
      <Navbar />  
      <CheckDilligence />
      <Footer />
      <Sidebar />
      
      </div>
  );
}

export default DueDilligence;
