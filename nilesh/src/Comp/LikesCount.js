import React, { Component } from "react";
import HOC from './HOC';

class LikesCount extends Component {

    render() {
        return (
            <div>
               <h3>Total Likes:</h3> {this.props.Countnumber}<br/>
                <button onClick={this.props.handleClick}>Likes</button>
            </div>
        )
        }
}
const EnhancedLikes=HOC(LikesCount);
export default EnhancedLikes;