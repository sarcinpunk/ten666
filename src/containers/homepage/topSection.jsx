import React from "react";
import { Element} from "react-scroll";
import styled from "styled-components";


import BackgroundImg from "../../assets/banner.jpg";
import { Button } from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";

import {Popup} from "../../components/popUp";
import {Tid} from "../../components/tid";

const Banner = styled.div`
  width: 1880px;
  height: 10%;
  background-color:  rgba(113, 113, 113, 0.48);
  background-image:
    linear-gradient(
      #B0B0B0,#707070 
    );
`;


const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
  text-align: center;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

const ButConin = styled.div`
  
  display:flex;


`;
export function TopSection(props) {
 

  return (
    <Element name="topSection">
      <TopContainer>
        
        <BackgroundFilter>
          
          <Navbar />
          
          
        
          <Marginer direction="vertical" margin="8em" />
          <Logo />
          <Tid/>
         

        
          
          <Marginer direction="vertical" margin="4em" />
          <MotivationalText>RECORD, REPLAY & RE-LEARN</MotivationalText>
          <MotivationalText></MotivationalText>
          
          <Marginer direction="vertical" margin="2em" />
          <ButConin>
            <a href="https://www.indiegogo.com/projects/gigadrive-world-s-fastest-external-ssd?gclid=CjwKCAjw1uiEBhBzEiwAO9B_HYcuyx0VMKMmze4T33RHMjfj_sPo-_zgILF52BL-xOek0hiFffKqGRoC-u4QAvD_BwE#/"><Button>support our project</Button></a> 
            <Marginer direction="horizontal" margin="2em"/>
            <Popup/>
            </ButConin>
          <DownArrowContainer>
          
            <DownArrow />
            
         
          </DownArrowContainer>
          <Marginer direction="vertical" margin="20em" />
          <Banner/>
          
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}