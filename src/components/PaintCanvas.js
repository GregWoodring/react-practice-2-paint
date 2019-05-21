import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import Square from './Square';

export default class PaintCanvas extends Component{
    constructor(props){
        super(props);

        this.state ={
            selectedColor: 'white',
            mouseDown: false
        }
    }

    handleChangeColor = color => {
        this.setState({
            selectedColor: color
        })
        console.log('color:', this.state.selectedColor);
    }

    handleMouseDown = () => {
        this.setState({
            mouseDown: true
        })
    }

    handleMouseUp = () => {
        this.setState({
            mouseDown: false
        })
    }

    draw(){
        let squares = [];
        for(let i = 0; i < 5000; i++){
                
                squares.push(
                    <Square 
                    color={this.state.selectedColor}
                    mouseDown={this.state.mouseDown}
                    />
                )
        }
        return squares;
    }

    render(){
        return(
            <div
                
            >
                <ColorPicker action={this.handleChangeColor}/>
                <div 
                onMouseDownCapture={this.handleMouseDown}
                onMouseUpCapture={this.handleMouseUp}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                {this.draw()}
                </div>
            </div>
        )
    }
}