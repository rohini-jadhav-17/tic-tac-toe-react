import React, {useState} from 'react';
import Square from './Square';
import Choose from './choose';


const Board = ()=>{
    const [square, setSquare] = useState(Array(9).fill(null));
    const [X ,setX] = useState(null);
    
    const winner = calculateWinner(square);
    let status;
    let PlayerTurn;
    
    if(winner){
        status = `Winner is ${winner}`;
    }
    if(!winner){
        PlayerTurn = `Player turn ${(X === 'X') ? 'X' : 'O'}`;
    }
    const statusWinner = ()=>(
        <div className="fontValue">
            {status}
        </div>
    )
    const PlayerMove = ()=>(
        <div className="fontValue">
            {PlayerTurn}
        </div>
    )
    const renderSquare = (i)=>(
        <Square value={square[i]} onClick ={()=> handleClick(i)}/>
    )
    const handleClick = (i)=>{
        const squares = square.slice();
        if(squares[i] === null && winner === null){
            console.log(X);
            squares[i] = (X === 'X') ? 'X' : 'O';
            setSquare(squares);
            setX((X === 'X') ? 'O' : 'X');
        }
    }
    function calculateWinner(square){
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        
        for( let i=0; i < lines.length; i++){
            let [a,b,c] = lines[i];
            if(square[a] && square[a]===square[b] && square[a]===square[c]){
                return square[a];
            }
        }
        return null;
    }
    const onClick = (e)=>{
        setX(e.target.value);
    }
    return(
        <div className="board-wrapper">
            
            <div> 
            <h1>TIC TAC TOE</h1>
                <Choose onClick={(e)=>onClick(e)}/>
                {PlayerMove()}
            </div>
            
            <div className="board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
                {statusWinner()}
            </div>
        </div>
            
    )
}

export default Board;