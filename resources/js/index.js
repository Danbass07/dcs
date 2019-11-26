import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Router, Route, Link} from 'react-router-dom';


import Example from './containers/Example';


if (document.getElementById('root')) {
    ReactDOM.render(

    <BrowserRouter>
        <div >
            <Example />

        </div>
    </BrowserRouter>
    
    
    
    , document.getElementById('root'));
}