import React, { Component } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import  "./input-icon.css"
class InputIcons extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <span className="input-icon-1"> <AiFillCheckCircle /> </span>
            <span className="input-icon-2"> <AiFillCloseCircle /> </span>
                
            
                
            </>
        );
    }
}
export default InputIcons;
