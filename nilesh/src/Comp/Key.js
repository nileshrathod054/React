import React from "react";
function Key(){
    const names=[
        {
            id:1,name:'Nilesh',age: 24,
        },
        {
            id:2,name:'Ashwin',age: 19,
        }
    ]
    const NameList=names.map(name=><h2>I am {name.name} I am {name.age}</h2>)
    return<div>{NameList}</div>
}
export default Key;