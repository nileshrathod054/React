import React from 'react';
const Greet=props=>{

    console.log(props)
    return(
        <div>
            <h1>
                Greet component:-  {props.name}   {props.value}
            </h1>
            {props.children}
        </div>
    )

}
export default Greet