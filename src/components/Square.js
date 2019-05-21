import React, { Component } from 'react';

export default class Square extends Component{
    constructor(props){
        super(props)

        this.state = {
            currentColor: 'white',
            mouseDown: false
        }
    }

    changeColor = () => {
        if(this.props.mouseDown){
            this.setState({
                currentColor: this.props.color
            })
        }
    }

    
    
    render() {

        return(
            <div
                style={{
                    height: 10,
                    width: 10,
                    border: '1px solid black',
                    backgroundColor: this.state.currentColor
                }}
                onMouseEnter={this.changeColor}>

            </div>
        )
    }
}
