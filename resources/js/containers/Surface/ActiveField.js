import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square.js'

function ActiveField() {

   const style = {
        backgroundColor: 'black',
        display: 'flex',
        flexWrap: 'wrap',
        width: '500px',
        height: '300px',
    }
    return (
    <React.Fragment>
        <div style={style}>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    </React.Fragment>
    );
}

export default ActiveField;


