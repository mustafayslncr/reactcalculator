import React, { useState } from 'react';
import "./Calculator.css"

export default function Calculator() {
    const [input,setInput]=useState('')

    return (
        <div className="buton">
            <div className="inputt">{input}</div>
            <div className="butondiv">
            <div className="geni">
                <button onClick={()=>setInput("") } value="">AC</button>
                <button onClick={()=>setInput(input.substr(0, input.length - 1))}>Clear</button>
                <button onClick={e => setInput(input + e.target.value)} value="%">%</button>
                <button onClick={e => setInput(input + e.target.value)} value="/" className="butstyle">/</button>
            </div>
            <div>
                <button onClick={e => setInput(input + e.target.value)} value="7" className="genis">7</button>
                <button onClick={e => setInput(input + e.target.value)} value="8" className="genis">8</button>
                <button onClick={e => setInput(input + e.target.value)} value="9" className="genis">9</button>
                <button onClick={e => setInput(input + e.target.value)} value="*" className="genis butstyle">*</button>
           
            </div>
            <div>
                <button onClick={e => setInput(input + e.target.value)} value="4" className="genis">4</button>
                <button onClick={e => setInput(input + e.target.value)} value="5" className="genis">5</button>
                <button onClick={e => setInput(input + e.target.value)} value="6" className="genis">6</button>
                <button onClick={e => setInput(input + e.target.value)} value="-" className="genis butstyle">-</button>
            
            </div>
            <div>
                <button onClick={e => setInput(input + e.target.value)} value="1" className="genis">1</button>
                <button onClick={e => setInput(input + e.target.value)} value="2" className="genis">2</button>
                <button onClick={e => setInput(input + e.target.value)} value="3" className="genis">3</button>
                <button onClick={e => setInput(input + e.target.value)} value="+" className="genis butstyle">+</button>
                
            </div>
            <div>
                <button onClick={e => setInput(input + e.target.value)} value="0" className="geniss">0</button>
                <button onClick={e => setInput(input + e.target.value)} value="." className="geniss">.</button> 
                <button onClick={() => setInput(String(eval(input)))} value="" className="geniss butstyle">=</button>
            </div>
            
            </div>
            
            
            
            
            

        </div>
    )
}
