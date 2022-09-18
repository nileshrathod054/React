import React from "react";
const stateTutorial=()=>{
    let count=0; //variable
    const increment =()=>{
        count=count+1
        console.log(count)
    }
    return(
        <div>
            {count}
            <button onClick={increment} >Increment</button>
        </div>
    )
}
export default stateTutorial;