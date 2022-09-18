import React, { Component } from 'react';
class State extends Component {
    constructor(){
        super()
        this.state={
            message:"State Component"
        }
    }
    changemessage(){
        this.setState ({
            message:"Thank You"
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.message} </h1>
                <button on onClick={()=>this.changemessage()}>subscribe</button>
            </div>
        )
    }
}
export default State;