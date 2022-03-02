import React  from "react";


export default function Square({ClickedArray,handelClick,player,gameFinished,alonegame}){

let arr = ClickedArray.map((el ,index)=>(el === "") ? index : "$").filter(el=> el !== "$")
                    
if(!player || alonegame){
        
    if(gameFinished){
      return(
        <div className="board">
          {   
            ClickedArray.map( function (item){
                if(!gameFinished){return  <div> {item} </div>} 
            })
          }
        </div>
      )
    };
      return(
      <div className="board">
          {   
          ClickedArray.map( (item,index) => {
              if(item === ""){ 
                  return ( 
                  <div
                      key={index}
                      className="Square" onClick={(evt)=>handelClick(index,evt)}
                  >
  
                      {item}
                  </div>
                  )
              }else{
                  return <div key={index} className="Square"> {item} </div>
              }
          })
          }
      </div>
      )
    
}else{

 arr.splice(4,1)
 handelClick(parseInt(arr.splice(1,1)))

 return(
    <div className="board">
       {   
          ClickedArray.map( function(item,index) {
            if(!gameFinished ){
                return <div key={index} className="Square"> {item} </div>
            }
              
          })
       }
    </div>
 )

}

}