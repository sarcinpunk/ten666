import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { Link} from "react-scroll";
import { Marginer } from "../marginer";






const Banner = styled.div`
  width: 10000px;
  height: 40%;
  background-color:  rgba(113, 113, 113, 0.48);
  
  
  
`;

const Buttonstyled = styled.button`
 
  border-radius: 0px;
 
  font-weight: bold;
  font-family: Roboto;
  
  outline: none;
  border: 0px solid transparent;
  background-color: #00B997;
  color: #fff;
  transition: all 1000ms ease-in-out;
  cursor: pointer;
  
  &:hover {
    background-color: transparent;
    border: 0px solid;
    
  }
`;


const ArrowContainer = styled.div`
 
  
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: all 250ms ease-in-out;
 
  cursor: pointer;
  
  
`;

const ArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  
`;



export function DownArrow() {
  return (

    <>
    
    
    <ArrowContainer>    

    
      <Link to="p1" smooth={true} duration={500}>
      <Buttonstyled>Appfeatures</Buttonstyled>
      
      
      </Link>

      
      
      
    
   
      <Link to="p2" smooth={true} duration={500}>
      <Buttonstyled>About</Buttonstyled>
      </Link>
    
    
    
    
      <Link to="p3" smooth={true} duration={500}> <ArrowIcon></ArrowIcon>
      <Buttonstyled>reveiws</Buttonstyled>
      <Marginer direction="vertical" margin="2px" />
      
      </Link>

    
    </ArrowContainer>
   
    </>
  
  );
}