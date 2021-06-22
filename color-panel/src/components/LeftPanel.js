import React, { useState } from 'react';
import '../panel.css'



const LeftPanel = () => {

    const [btn, setBtn] = useState();

    const handleClick = () => {
        setBtn = 
    }


    return(
    <div className="left">
        <div className="inpt_color">
            <label>HEX Code</label>
            <input className="pixedColor" type="color" onChange={handleClick()} ></input>
        </div>
        
    </div>

    )}



export default LeftPanel;
