import React from 'react';
import ReactDOM from 'react-dom';


const Mo_Sty = {
    position: 'fixed', 
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const Ov_St = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000,
    
    
}



export function Modal({ open, children, onClose }) {

    if (!open) return null;


    return ReactDOM.createPortal (
       
       <>
       <div style={Ov_St}/>
       
       <div style={ Mo_Sty} >
          
        <button onClick={onClose}></button>
            {children}

        </div>
       </>, document.getElementById('Portal')  )   
}; 