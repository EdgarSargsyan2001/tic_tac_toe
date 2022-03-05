import React, { useState ,useRef} from "react";
import EndGame from "./EndGame";
import Square from "./Square";


const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


export default function TicTacToe(){
    const [grid,setgrid] = useState(Array(9).fill(INITIAL))
    const [player,setplayer] = useState(false)
    const [gameFinished,setGamefinishd] = useState(false)
    const [draw,setDraw] = useState(false)
    const [winCount,setWinCount] = useState({X:0,O:0})
    const [alonegame,setalonegame] = useState(false)
    const [gamewinwr,setgamewinwr] = useState(false)
    const pleyerTurnColor = useRef()


    function isGameOver(){
     if(!gameFinished){

        // X win check
        for(let i = 0; i < 8; i++){
            if(
                grid[winCombination[i][0]] === X_PLAYER &&
                grid[winCombination[i][1]] === X_PLAYER &&
                grid[winCombination[i][2]] === X_PLAYER 
              ){
                  setGamefinishd(true)
                  setgamewinwr(true)
                  setWinCount({...winCount, X:winCount.X + 1})
                  //   console.log("x wone")
                  return;
              }
        }

        // O win  check

        for(let i = 0; i < 8; i++){
            if(
                grid[winCombination[i][0]] === O_PLAYER &&
                grid[winCombination[i][1]] === O_PLAYER &&
                grid[winCombination[i][2]] === O_PLAYER 
              ){
                  setGamefinishd(true)
                  setWinCount({...winCount, O:winCount.O + 1})
                  //   console.log("o wone")
                  return
              }
        }


        if(!grid.includes(INITIAL)){
            setDraw(true)
            setGamefinishd(true)
        }
     }
    }

    isGameOver()


    function restGame_clHistory (val){
        if(val === "cl_History"){
            setWinCount({X:0,O:0})
        }
        setgrid(Array(9).fill(INITIAL))
        setGamefinishd(false)
        setgamewinwr(false)
        setDraw(false)

    }

    function handelClick(id,evt){

        setgrid(
            grid.map((item,index)=>{
                if(index === id){
                    if(player){
                        if(alonegame){evt.target.style.color="rgb(186, 226, 9)"}
                        
                        pleyerTurnColor.current.style.color="rgb(255, 102, 0)"
                        return O_PLAYER
                    }else{
                        if(alonegame){evt.target.style.color="rgb(255, 102, 0)"}
                        
                        pleyerTurnColor.current.style.color="rgb(186, 226, 9)"
                        return X_PLAYER
                    }
                }else{
                    return item;
                }
            })
        )

        setplayer(!player)
    }
    
    function changealoneplay(evt){
        if(evt.target.value === "one"){
            return setalonegame(false)

        }
        if(evt.target.value === "tow"){
            return setalonegame(true)
        }
    }
    
    return (
        <div>
            <p className="win-history">
                X's WINS:{winCount.X}
                <br/>
                O's WINS:{winCount.O}

            </p>
            <p className="select-alone-play">
                <select className="select-alone-play" onChange={changealoneplay}>
                    <option value="one">alone</option>
                    <option value="tow">with two</option>
                </select>
            </p>

            <p  className="pleyer-turn">The Turn:
                 <span ref={pleyerTurnColor}  className="pleyer-turn-color">
                    {!player ? "X":"O"}
                 </span>
                 
            </p>
           { gameFinished && <EndGame 
                restGame_clHistory={restGame_clHistory}
                winCount={winCount}
                gamewinwr={gamewinwr}
                player={player} 
                draw={draw} />
           } 
            <Square 
                winComb={winCombination}
                ClickedArray={grid}
                player={player}
                alonegame={alonegame}
                handelClick={handelClick}  
            />
        </div>
    )
}