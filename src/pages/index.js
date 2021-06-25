import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection/Index';
import {
  homeObjOne,
  
  
} from '../components/InfoSection/Data';

import InfoSection1 from '../components/InfoSection1';
import { homeObjTwo } from '../components/InfoSection1/Data';
import Services from '../components/Services';
import InfoSection2 from '../components/InfoSection2';
import {homeObjThree} from '../components/InfoSection2/Data';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection1 {...homeObjTwo} />
      <Services />
      <InfoSection2 {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
