import { useState } from "react";
import Square from "./Square";



const Gameboard = ()=>{

    const [state,setState]= useState(Array(9).fill(null));
  

    const [isXTurn ,setXIsturn]=useState(true);
    const handleClick=(index)=>{
        // console.log("click",index)

        //for non -rpeating x and y


        if (state[index]!==null){
            return;
        }
        const clickedState =[...state];
        clickedState[index]= isXTurn? "X":"0";
        setState(clickedState);
        setXIsturn(!isXTurn);
   

    };

    const wonPlayer = ()=>{

const winnerLogic=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

for(let move of winnerLogic){
    const [a,b,c]=move;
    if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
        // return ;
        return state[a];  //for state of X or Y;
    }}

    return false;
    };

    const isWonPlayer = wonPlayer(); //call the function

const handleReset=()=>{
    setState(Array(9).fill(null));
}


return(


<div className="board">

    { isWonPlayer ? (<><div className="winner">{isWonPlayer}<h5> won the game</h5><button className="winner-btn" onClick={handleReset}>PLay Agian!</button></div></> ) :
    (<><div className="mover">lets Move {isXTurn?"X":"0"}  Its, Your Turn !</div>
    <div className="row">
    <Square onClick={()=>handleClick(0)} value={state[0]}/>
    <Square onClick={()=>handleClick(1)} value={state[1]}/>
    <Square onClick={()=>handleClick(2)} value={state[2]}/>
    </div>
 
    <div className="row">
    <Square onClick={()=>handleClick(3)} value={state[3]}/>
    <Square onClick={()=>handleClick(4)} value={state[4]}/>
    <Square onClick={()=>handleClick(5)} value={state[5]}/>
        </div>


    <div className="row">
    <Square onClick={()=>handleClick(6)} value={state[6]}/>
    <Square onClick={()=>handleClick(7)} value={state[7]}/>
    <Square onClick={()=>handleClick(8)} value={state[8]}/>
     </div></>)}



</div>

)
};

export default Gameboard;
