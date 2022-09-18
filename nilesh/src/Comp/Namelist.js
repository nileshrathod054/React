import React from "react";
function Namelist(){
    const names=['Nilesh','Prakash','Rathod']
    return(
        <div>{
            names.map(name=><h2> {name} </h2>)}</div>
    )
}
export default Namelist;