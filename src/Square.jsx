import React from "react";

export default function Square({ClickedArray,handelClick}){

    

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

}