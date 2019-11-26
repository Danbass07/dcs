import React from 'react';
import ReactDOM from 'react-dom';
import ActiveField from './ActiveField';

function Surface() {
    return (
    <React.Fragment>
          
        <ActiveField />

   
    </React.Fragment>
    );
}

export default Surface;

if (document.getElementById('surface')) {
    ReactDOM.render(<Surface />, document.getElementById('surface'));
}
