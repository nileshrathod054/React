import React, { Component} from 'react';
import HOC from './HOC';
   class CommentCount extends Component {
    render() {
        return (
            <div>
                <h3>Total Comments: </h3>{this.props.Countnumber} <br/>
                <button onClick={this.props.handleClick}>Add Comment! </button>
                </div>
                );
                }
                }
                const EnhancedComments=HOC(CommentCount);
                export default EnhancedComments;
