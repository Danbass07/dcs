import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square.js'

function ActiveField() {
    let random= Math.random();
   const style = {
        backgroundColor: 'black',
        display: 'flex',
        flexWrap: 'wrap',
        width: '500px',
        height: '300px',
    }
    
        let v=0;
        let squares = []
        for(v=0; v<561; v++) {
            squares.push(v)
        }
    console.log(random);
    return (
    <React.Fragment>
        <div style={style}>
      {squares.map((square) => { return <Square index={square} number={random} key={square}/> })}
        </div>
    </React.Fragment>
    );
}

export default ActiveField;


