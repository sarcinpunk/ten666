import React from "react";
import "./App.css";
import { Homepage } from "./containers/homepage";
import { Parallax, ParallaxProvider   } from 'react-scroll-parallax';

function App(props) {
  return <ParallaxProvider>  <Homepage />
        
          </ParallaxProvider>;
}

export default App; 