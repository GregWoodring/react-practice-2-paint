import React from 'react';

export default function ColorPicker(props){
    return(
        <div>
            <button onClick={() => props.action('blue')}>Blue</button>
            <button onClick={() => props.action('green')}>Green</button>
            <button onClick={() => props.action('red')}>Red</button>
            <button onClick={() => props.action('purple')}>Purple</button>
            <button onClick={() => props.action('yellow')}>Yellow</button>
            <button onClick={() => props.action('pink')}>Pink</button>
            <button onClick={() => props.action('black')}>Black</button>
            <button onClick={() => props.action('white')}>White</button>
        </div>
    )
}
