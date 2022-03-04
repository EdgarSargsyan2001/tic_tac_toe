import React  from "react";


export default function Square({ClickedArray,handelClick,player,alonegame}){

let arr = ClickedArray.map((el ,index)=>(el === "") ? index : "$").filter(el=> el !== "$")
                    
if(!player || alonegame){
      return(
      <div className="board">
          {   
          ClickedArray.map( (item,index) => {
              if(item === ""){ 
                  return ( 
                  <div
                      key={index}
                      className='Square' onClick={(evt)=>handelClick(index,evt)}
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
       
    </div>
 )

}

}