import React from 'react';


const Choose = (props)=>{
    
    
    return(
        <div>
            <div className="container">
                <div className="wrapper">Pick your side</div>
                <div className="options">
                    <button value='X' className="playerX" onClick = {(e)=>props.onClick(e)}>X</button>
                    <button value='O' className="playerO" onClick = {(e)=>props.onClick(e)}>O</button>
                </div>
            </div>
           
        </div>
        
    )
}

export default Choose;