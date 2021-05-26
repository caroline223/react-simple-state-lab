import { ReactWrapper } from 'enzyme';
import React from 'react';

class Cell extends React.Component {
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



export default Cell;