
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourSerivce";

import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/imgstartup2.jpg";
import Service2Img from "../../assets/realtime_analysis.png";
import Service3Img from "../../assets/QR.png";
import Service4Img from "../../assets/feedback.png";



const AppContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

const BoxSw = styled.div`
  width: 80%;
  height: 80%;
    border: 1px solid;
    padding: 8px;
    padding-left: 20%;
    box-shadow: 5px 10px;
`;  

export function AppFeature(props) {
  return (
    
    <AppContainer name="sappFeature">
     
     
      <SectionTitle id="p1">App Features </SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      
        
        <OurSerivce title="AI analysis" description="I TRACKET allows tennis players to record, replay and analyze their tennis games just by using a app.  you can observe, review and share videos with friends and coaches and reach a new level of tennis"
        imgUrl={Service1Img}/>
        
        <Marginer direction="vertical" margin="3em" />
        
        <OurSerivce title="Record with the smart racket mount" description="view your tennis  performance as a professionel.
        The smart racket mount gives you easy access to recording tennis, directly at your tennsclub."
        imgUrl={Service2Img}
        isReversed/>
                

        <OurSerivce title="Get the best tennis technique" description="Replay: I TRACKET use IA technology to analyze key performance indicators. with the app you are able to be seen backhand, forehand and slice in sequence and in slow motion. as well as many other features are available in the app."
        imgUrl={Service3Img}/>
       
        <OurSerivce title="Get the best feedback" description="Re-learn:
        we are working on developing methods to analyze tennis player performance with deep learning research."
        imgUrl={Service4Img}isReversed/>
        
      
     
     
     
     
     
    </AppContainer>
  );
}