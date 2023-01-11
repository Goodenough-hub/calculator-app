import React, { Component } from 'react';

class Base extends Component {
    state = {  } 
    render() { 
        return (
            <div className="card" style={{maginTop:"20px"}}>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
 
export default Base;