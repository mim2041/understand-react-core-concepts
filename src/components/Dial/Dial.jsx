import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid purple', margin: '20px'}}>
            <h2>This is Dial component</h2>
            <h3>Your steps count: {props.steps}</h3>
        </div>
    );
};

export default Dial;