import React, {useState} from 'react';
import {Modal} from '../modal';
import {Video} from '../video';
import styled from "styled-components";
import { theme } from "../../theme";


const But_wra_sty = {
    position: 'relative',
    zIndex: 1
}

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
  border-radius: 5px;
  background-color: ${theme.primary};
  color: #fff;
  font-weight: bold;
  font-size: ${({ small }) => (small ? "12px" : "16px")};
  outline: none;
  border: 2px solid transparent;
  transition: all 1000ms ease-in-out;
  cursor: pointer;
  
  &:hover {
    background-color: transparent;
    border: 2px solid ${theme.primary};
  }
`;


export function Popup () {

    const [isOpen, setIsOpen] = useState(false);

  

    return (
        <>
        <div style={But_wra_sty}>
            <ButtonWrapper onClick={() => setIsOpen(true)}>watch promo video</ButtonWrapper>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}><Video/>
            </Modal>
        </div>
        
        </>
        )
}

