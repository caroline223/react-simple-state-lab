import React, { Component } from 'react';



export default class Cell extends Component {
    //constructor that sets the initial state
    constructor(props) {
        super();
        this.state = {
            color: props.value
        }
    }

    listenClick = () => {
        this.setState({color: '#333'})
    }

    render() {
        return (
            <div 
                className="cell" 
                style={{backgroundColor: this.state.color}} 
                onClick={this.listenClick}> 
            </div>
        )
    }

}



